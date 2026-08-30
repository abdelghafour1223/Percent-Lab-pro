/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { CalculatorForm } from '@/components/calculator-form';
import { getCalculatorBySlug } from '@/data/calculators';

// Configure React 18 act() environment for raw hydrateRoot usage.
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const fractionCalc = getCalculatorBySlug('basic-percent', 'fraction-to-percent')!;

describe('CalculatorForm prefill (initialValues)', () => {
  it('renders empty fraction fields when no initialValues prop is given (unchanged behavior)', () => {
    render(<CalculatorForm calculator={fractionCalc} categoryId="basic-percent" />);
    expect((screen.getByLabelText('Numerator') as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText('Denominator') as HTMLInputElement).value).toBe('');
  });

  it('seeds fraction fields from initialValues { numerator: "32", denominator: "40" }', () => {
    render(
      <CalculatorForm
        calculator={fractionCalc}
        categoryId="basic-percent"
        initialValues={{ numerator: '32', denominator: '40' }}
      />
    );
    expect((screen.getByLabelText('Numerator') as HTMLInputElement).value).toBe('32');
    expect((screen.getByLabelText('Denominator') as HTMLInputElement).value).toBe('40');
  });

  it('prefilled values drive the calculation (32/40 → 80) and remain user-editable', () => {
    render(
      <CalculatorForm
        calculator={fractionCalc}
        categoryId="basic-percent"
        initialValues={{ numerator: '32', denominator: '40' }}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Calculate' }));
    // fraction-to-percent displays the bare rounded value (no % suffix — pre-existing behavior)
    expect(screen.getByText('80.00')).toBeInTheDocument();

    // User can overwrite a prefilled value: 30/40 → 75
    fireEvent.change(screen.getByLabelText('Numerator'), { target: { value: '30' } });
    fireEvent.click(screen.getByRole('button', { name: 'Calculate' }));
    expect(screen.getByText('75.00')).toBeInTheDocument();
  });

  it('is hydration-safe: SSR markup hydrates from serialized props without mismatch', () => {
    const props = {
      calculator: fractionCalc,
      categoryId: 'basic-percent',
      initialValues: { numerator: '32', denominator: '40' },
    };
    const html = renderToString(<CalculatorForm {...props} />);
    expect(html).toContain('value="32"');
    expect(html).toContain('value="40"');

    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    const consoleErrors: string[] = [];
    const errorSpy = jest.spyOn(console, 'error').mockImplementation((...args: unknown[]) => {
      consoleErrors.push(args.map(String).join(' '));
    });

    act(() => {
      hydrateRoot(container, <CalculatorForm {...props} />);
    });

    const hydrationIssues = consoleErrors.filter((msg) =>
      /hydrat|did not match|server rendered|mismatch/i.test(msg)
    );
    expect(hydrationIssues).toEqual([]);
    expect((screen.getByLabelText('Numerator') as HTMLInputElement).value).toBe('32');
    expect((screen.getByLabelText('Denominator') as HTMLInputElement).value).toBe('40');

    errorSpy.mockRestore();
    container.remove();
  });
});
