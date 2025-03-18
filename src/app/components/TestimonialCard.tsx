'use client'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 flex-grow">{content}</p>
      <div className="mt-4 flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
} 