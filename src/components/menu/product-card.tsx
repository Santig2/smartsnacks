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
      className={`group relative w-full shrink-0 bg-[#17343A]/5 p-1.5 rounded-[2rem] border border-[#17343A]/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:shadow-xl ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-white rounded-[calc(2rem-6px)] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_16px_rgba(0,0,0,0.02)] border border-[#17343A]/5 h-full flex flex-col overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] bg-[#EBF8FA] overflow-hidden">
          {/* Placeholder image representation */}
          <Image 
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
          />
          
          {/* Top Right Badge matching reference */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-white/90 backdrop-blur-sm text-[#17343A] font-bold px-3 py-1 text-[10px] tracking-widest uppercase border-none rounded-full shadow-sm">
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
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#17343A]/5 text-[11px] font-bold text-[#17343A]">
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
            {product.highlights.slice(0, 2).map((h, i) => (
              <span key={h} className="flex items-center gap-1">
                {i > 0 && <span className="text-[#17343A]/30">/</span>}
                <span className="bg-[#FDF9F3] border border-[#17343A]/10 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">{h}</span>
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
