import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Analytics Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Chart Placeholder -->
          <div class="bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center">
            <p class="text-gray-500">Chart visualization will be implemented here</p>
          </div>
          
          <!-- Metrics -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Page Views</span>
              <span class="font-medium">24,543</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Unique Visitors</span>
              <span class="font-medium">12,345</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Bounce Rate</span>
              <span class="font-medium">32.5%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Avg. Session Duration</span>
              <span class="font-medium">4m 32s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Pages -->
      <div class="card">
        <h2 class="text-xl font-semibold mb-4">Top Pages</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique Visitors</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Time</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Homepage</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12,345</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,765</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2m 15s</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Products</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,432</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5,678</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3m 45s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class AnalyticsComponent {} 