import { Leaf } from "lucide-react";

export function HerbalifeDisclaimerSection() {
  return (
    <section className="py-12 bg-white border-t border-[#17343A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 sm:p-8 rounded-3xl bg-[#FDF9F3] border border-[#17343A]/10">
          <div className="w-12 h-12 rounded-full bg-[#EBF8FA] flex items-center justify-center text-[#55C5D5] shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#17343A] mb-2 text-center sm:text-left">
              Quality Nutrition & Ingredients
            </h3>
            <p className="text-xs sm:text-sm text-[#3D585E] leading-relaxed text-center sm:text-left">
              Smart Snack Nutrition is a locally owned independent wellness bar. We proudly craft our unique menu using a variety of high-quality ingredients, including select Herbalife nutritional products, to deliver exceptional taste and results. This website is for informational purposes for our local Pembroke Pines community and does not imply a direct corporate partnership or endorsement by Herbalife International.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
