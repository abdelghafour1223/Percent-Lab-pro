'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, DollarSign } from 'lucide-react';

interface Item {
  id: number;
  name: string;
  originalPrice: string;
  discountPercent: string;
}

export function MultiItemCalculator() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'TV', originalPrice: '500', discountPercent: '20' },
    { id: 2, name: 'Laptop', originalPrice: '800', discountPercent: '25' },
  ]);

  const addItem = () => {
    const newId = Math.max(...items.map(i => i.id), 0) + 1;
    setItems([...items, { id: newId, name: '', originalPrice: '', discountPercent: '' }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: keyof Item, value: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateTotals = () => {
    let totalOriginal = 0;
    let totalSavings = 0;
    let totalFinal = 0;

    items.forEach(item => {
      const price = parseFloat(item.originalPrice) || 0;
      const discount = parseFloat(item.discountPercent) || 0;
      const savings = (price * discount) / 100;

      totalOriginal += price;
      totalSavings += savings;
      totalFinal += (price - savings);
    });

    return { totalOriginal, totalSavings, totalFinal };
  };

  const { totalOriginal, totalSavings, totalFinal } = calculateTotals();

  return (
    <Card className="mb-8 border-2 border-yellow-500 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-600" />
          Black Friday 2025 Multi-Item Savings Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Items List */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={item.id} className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-sm text-gray-600">Item {index + 1}</span>
                  {items.length > 1 && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-red-600 hover:text-red-800"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Item Name</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                      className="w-full p-2 border rounded text-sm"
                      placeholder="e.g., TV"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Original Price ($)</label>
                    <input
                      type="number"
                      value={item.originalPrice}
                      onChange={(e) => updateItem(item.id, 'originalPrice', e.target.value)}
                      className="w-full p-2 border rounded text-sm"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Discount (%)</label>
                    <input
                      type="number"
                      value={item.discountPercent}
                      onChange={(e) => updateItem(item.id, 'discountPercent', e.target.value)}
                      className="w-full p-2 border rounded text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>
                {item.originalPrice && item.discountPercent && (
                  <div className="mt-2 text-xs text-gray-600">
                    Save: ${((parseFloat(item.originalPrice) * parseFloat(item.discountPercent)) / 100).toFixed(2)} •
                    Pay: ${(parseFloat(item.originalPrice) - (parseFloat(item.originalPrice) * parseFloat(item.discountPercent)) / 100).toFixed(2)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Item Button */}
          <button
            onClick={addItem}
            className="w-full border-2 border-dashed border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-black px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Another Item
          </button>

          {/* Total Summary */}
          <div className="bg-gradient-to-br from-yellow-100 to-red-100 p-6 rounded-lg border-2 border-yellow-500 mt-6">
            <h3 className="font-bold text-lg mb-4 text-center">Total Black Friday Savings</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-600 mb-1">Original Total</p>
                <p className="text-xl font-bold text-gray-700">${totalOriginal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">You Save</p>
                <p className="text-2xl font-bold text-red-600">${totalSavings.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">You Pay</p>
                <p className="text-2xl font-bold text-green-700">${totalFinal.toFixed(2)}</p>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Total Savings: {totalOriginal > 0 ? ((totalSavings / totalOriginal) * 100).toFixed(1) : 0}%
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Share My Savings
            </button>
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
              Save for Later
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
