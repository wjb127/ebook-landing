'use client'

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export default function DashboardCard({ title, value, change, isPositive, icon }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold mt-1 text-gray-800">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-50">{icon}</div>
      </div>
      <div className={`mt-4 flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <span className="font-medium">{change}</span>
        <svg 
          className={`h-4 w-4 ml-1 ${isPositive ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-gray-400 ml-2">지난 주 대비</span>
      </div>
    </div>
  )
} 