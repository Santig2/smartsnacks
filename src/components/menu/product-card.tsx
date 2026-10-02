import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  // Use a placeholder if no image exists
  const imageSrc = product.image || "/assets/images/hero_shakes_teas.jpg"; 

  return (
    <div 
      onClick={onClick}
      className={`group flex flex-col overflow-hidden clay-card transition-all duration-300 hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#EBF8FA] overflow-hidden">
        {/* Placeholder image representation */}
        <Image 
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Top Right Badge matching reference */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-[#F4C84A] text-[#17343A] hover:bg-[#E3B739] font-bold px-3 py-1 text-xs tracking-wider uppercase border-none rounded-sm">
            {product.categoryLabel}
          </Badge>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Title & Price Row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-[#17343A] group-hover:text-[#E83C8B] transition-colors leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#3D585E] leading-relaxed mb-6 flex-1">
          {product.shortDescription}
        </p>

        {/* Nutritional Highlights Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#17343A]/10 text-[11px] font-bold text-[#17343A]">
          {product.proteinAmount && (
            <span className="flex items-center gap-1">
              <span className="text-[#3D585E] font-normal">{product.proteinAmount}</span>
            </span>
          )}
          {product.caloriesPlaceholder && (
            <span className="flex items-center gap-1">
              <span className="text-[#17343A]/30">/</span>
              <span className="text-[#3D585E] font-normal">{product.caloriesPlaceholder}</span>
            </span>
          )}
          {product.highlights.slice(0, 3).map((h, i) => (
            <span key={h} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#17343A]/30">/</span>}
              <span className="border border-[#17343A]/20 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">{h}</span>
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
}
