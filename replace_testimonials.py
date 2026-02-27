import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add Swiper CSS in head
if 'swiper-bundle.min.css' not in content:
    content = content.replace('</head>', '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />\n</head>')

# Add Swiper JS before script.js
if 'swiper-bundle.min.js' not in content:
    content = content.replace('<script src="script.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>\n    <script src="script.js"></script>')

new_testimonials = """    <!-- TESTIMONIALS -->
    <section id="testimonials" class="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 32px 32px"></div>
        <div class="container mx-auto px-4 max-w-7xl relative z-10">
            <div class="text-center mb-24 fade-in-up">
                <h2 class="text-4xl md:text-5xl font-serif mb-6">Success <span class="italic text-accent">Stories</span></h2>
                <p class="text-white/70 text-lg max-w-2xl mx-auto">Hear from students who have successfully achieved their dreams and secured their visas with our comprehensive support.</p>
            </div>

            <!-- Swiper Container -->
            <div class="swiper testimonials-swiper pb-16">
                <div class="swiper-wrapper">
                    <!-- Story 1 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37] flex flex-col items-center text-center relative mt-8 h-full">
                            <div class="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden absolute -top-12 bg-slate-100">
                                <img src="assets/abi_1772005944180.jpg" alt="Abi Varghese" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="mt-12 flex items-center justify-center gap-2 mb-6 bg-green-50 px-3 py-1.5 rounded-full">
                                <span class="flex h-2 w-2 rounded-full bg-green-500"></span>
                                <span class="text-[10px] font-bold tracking-wider uppercase text-green-700">Visa Approved</span>
                            </div>
                            <p class="text-gray-600 italic font-serif leading-relaxed mb-6 text-sm flex-grow">"Thank you Frankfuter Overseas for the seamless processing and expert guidance. 100% recommended!"</p>
                            <div class="mt-auto w-full pt-6 border-t border-border/50">
                                <h4 class="font-serif font-bold text-xl text-primary">Abi Varghese</h4>
                                <p class="text-gray-500 font-semibold text-xs mt-1">Summer Intake 2025</p>
                            </div>
                        </div>
                    </div>

                    <!-- Story 2 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37] flex flex-col items-center text-center relative mt-8 h-full">
                            <div class="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden absolute -top-12 bg-slate-100">
                                <img src="assets/ajay_1772005944182.jpg" alt="Ajay MG" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="mt-12 flex items-center justify-center gap-2 mb-6 bg-green-50 px-3 py-1.5 rounded-full">
                                <span class="flex h-2 w-2 rounded-full bg-green-500"></span>
                                <span class="text-[10px] font-bold tracking-wider uppercase text-green-700">Visa Approved</span>
                            </div>
                            <p class="text-gray-600 italic font-serif leading-relaxed mb-6 text-sm flex-grow">"Thank you Frankfuter Overseas for the seamless processing and expert guidance. 100% recommended!"</p>
                            <div class="mt-auto w-full pt-6 border-t border-border/50">
                                <h4 class="font-serif font-bold text-xl text-primary">Ajay MG</h4>
                                <p class="text-gray-500 font-semibold text-xs mt-1">Summer Intake 2025</p>
                            </div>
                        </div>
                    </div>

                    <!-- Story 3 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37] flex flex-col items-center text-center relative mt-8 h-full">
                            <div class="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden absolute -top-12 bg-slate-100">
                                <img src="assets/alan__1772005944182.jpg" alt="Alan Raj" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="mt-12 flex items-center justify-center gap-2 mb-6 bg-green-50 px-3 py-1.5 rounded-full">
                                <span class="flex h-2 w-2 rounded-full bg-green-500"></span>
                                <span class="text-[10px] font-bold tracking-wider uppercase text-green-700">Visa Approved</span>
                            </div>
                            <p class="text-gray-600 italic font-serif leading-relaxed mb-6 text-sm flex-grow">"Thank you Frankfuter Overseas for the seamless processing and expert guidance. 100% recommended!"</p>
                            <div class="mt-auto w-full pt-6 border-t border-border/50">
                                <h4 class="font-serif font-bold text-xl text-primary">Alan Raj</h4>
                                <p class="text-gray-500 font-semibold text-xs mt-1">Summer Intake 2025</p>
                            </div>
                        </div>
                    </div>

                    <!-- Story 4 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d4af37] flex flex-col items-center text-center relative mt-8 h-full">
                            <div class="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden absolute -top-12 bg-slate-100">
                                <img src="assets/Chandy_1772005944183.jpg" alt="Leya Chandy" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="mt-12 flex items-center justify-center gap-2 mb-6 bg-green-50 px-3 py-1.5 rounded-full">
                                <span class="flex h-2 w-2 rounded-full bg-green-500"></span>
                                <span class="text-[10px] font-bold tracking-wider uppercase text-green-700">Visa Approved</span>
                            </div>
                            <p class="text-gray-600 italic font-serif leading-relaxed mb-6 text-sm flex-grow">"Thank you Frankfuter Overseas for the seamless processing and expert guidance. 100% recommended!"</p>
                            <div class="mt-auto w-full pt-6 border-t border-border/50">
                                <h4 class="font-serif font-bold text-xl text-primary">Leya Chandy</h4>
                                <p class="text-gray-500 font-semibold text-xs mt-1">Summer Intake 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>"""

# Find the start and end of the old testimonials section
pattern = re.compile(r'<!-- TESTIMONIALS -->\s*<section id="testimonials".*?</section>', re.DOTALL)
content = pattern.sub(new_testimonials, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

