export type Language = 'th' | 'en'

export const translations = {
  th: {
    // Header – เรียบง่าย ตรงไปตรงมา
    headerServices: 'บริการ',
    headerDoctor: 'คุณหมอ',
    headerPricing: 'ราคา',
    headerReviews: 'รีวิว',
    headerContact: 'ติดต่อ',
    headerBooking: 'นัดหมาย',

    // Hero – ทำให้ดูอบอุ่น น่าค้นหา
    heroTitle: 'ดูแลฟันอย่างใส่ใจ ให้คุณยิ้มได้อย่างมั่นใจ',
    heroTitleLine1: 'ดูแลฟันอย่างใส่ใจ',
    heroTitleLine2: 'ยิ้มมั่นใจทุกวัน',
    heroSubtitle: 'คลินิกทันตกรรมคุณภาพ ใจกลางนครพนม',
    heroCtaBook: 'จองนัดเลย',
    heroCtaCall: 'โทร 081-161-5129',
    heroCardTitle: 'เวลาทำการ',
    heroCardHours: 'อังคาร – อาทิตย์: 11:00 – 20:00 น.',
    heroCardSunday: 'วันจันทร์ ปิดให้บริการ',
    heroCardQuickContact: 'ติดต่อด่วน',
    heroCardBadge: 'มาตรฐานสากล',

    // Doctor – ใช้คำที่ดูเป็นมิตรมากขึ้น
    doctorTitle: 'รู้จักคุณหมอของเรา',
    doctorName: 'ทันตแพทย์หญิงชนาภรณ์ แพงดี',
    doctorNameEn: 'Dr. Chanaporn Phaengdee',
    doctorRole: 'ทันตแพทย์ประจำคลินิก',
    doctorCredential1: 'ทันตแพทย์ศาสตรบัณฑิต จากมหาวิทยาลัยชั้นนำ',
    doctorCredential2: 'ประสบการณ์กว่า 5 ปี ด้านการดูแลช่องปาก',
    doctorCredential3: 'เชี่ยวชาญด้านความงามและสุขภาพฟัน',
    doctorStatement:
      'เราดูแลทุกคนด้วยความใส่ใจจริง ๆ ฟังปัญหาอย่างตั้งใจ อธิบายให้ชัดเจนทุกขั้นตอน เพื่อให้คุณสบายใจและมั่นใจก่อนเริ่มรักษาทุกครั้ง',

    // Services – ใช้ภาษาที่อ่านแล้วรู้สึกสบายใจ
    servicesTitle: 'บริการของเรา',
    servicesSubtitle: 'ครบครัน มาตรฐานพรีเมียม',
    service1Title: 'ตรวจสุขภาพช่องปาก',
    service1Desc: 'ตรวจละเอียด พร้อมปรึกษาแบบตรงจุดตามสภาพฟันปัจจุบัน',
    service2Title: 'ขูดหินปูน & ขัดฟัน',
    service2Desc: 'ทำความสะอาดล้ำลึก ป้องกันปัญหาเหงือกและฟันได้ดี',
    service3Title: 'อุดฟัน',
    service3Desc: 'ใช้วัสดุคุณภาพสูง สีกลมกลืนกับฟันธรรมชาติ ดูสวยเนียน',
    service4Title: 'ถอนฟัน',
    service4Desc: 'ถอนแบบอ่อนโยน ลดความกังวลและความเจ็บให้น้อยที่สุด',
    service5Title: 'รากฟันเทียม',
    service5Desc: 'มาตรฐานสากล ช่วยคืนฟันและรอยยิ้มให้มั่นใจเหมือนเดิม',
    service6Title: 'จัดฟัน / ปรึกษาจัดฟัน',
    service6Desc: 'ออกแบบรอยยิ้มที่เข้ากับคุณ พร้อมวางแผนการจัดฟันแบบละเอียด',

    // Why Smilist – ทำให้ดูน่าเชื่อถือและอบอุ่น
    whyTitle: 'ทำไมต้องเลือก Smilist',
    whySubtitle: 'เพราะเราดูแลคุณต่างออกไป',
    why1Title: 'สะอาดระดับพรีเมียม',
    why1Desc: 'ฆ่าเชื้อทุกชิ้น ใช้อุปกรณ์แบบใช้ครั้งเดียวทิ้ง',
    why2Title: 'อธิบายชัดเจน โปร่งใส',
    why2Desc: 'บอกทุกขั้นตอนให้เข้าใจ ไม่มีอะไรเซอร์ไพรส์',
    why3Title: 'เครื่องมือทันสมัย',
    why3Desc: 'เทคโนโลยีและอุปกรณ์มาตรฐานสากล',
    why4Title: 'อ่อนโยน & ติดตามผล',
    why4Desc: 'ทีมงานใส่ใจ คอยดูแลและแนะนำหลังทำฟันทุกครั้ง',

    // Pricing – ดูเป็นมิตร ไม่น่ากลัว
    pricingTitle: 'ราคาบริการ',
    pricingSubtitle: 'ชัดเจน เริ่มต้นเท่านี้',
    pricingBadge: 'ราคาโปร่งใส',
    pricingCheckup: 'ตรวจสุขภาพช่องปาก',
    pricingScaling: 'ขูดหินปูน + ขัดฟัน',
    pricingFilling: 'อุดฟัน',
    pricingExtraction: 'ถอนฟัน',
    pricingImplant: 'รากฟันเทียม',
    pricingBraces: 'จัดฟัน',
    pricingStarting: 'เริ่มต้น',
    pricingDisclaimer: '*ราคาขึ้นกับการประเมินโดยทันตแพทย์และความซับซ้อนของเคส',
    pricingConsult: 'สอบถามเพิ่มเติม',

    // Location – ปรับให้ดูเรียบง่าย
    locationTitle: 'ที่ตั้งคลินิก',
    locationSubtitle: 'ใจกลางเมือง เดินทางสะดวก',
    locationAddress: 'Smilist Clinic สไมลิสต์คลินิก',
    locationAddressDetail: '381 21-22 ถนนนิตโย ตำบล หนองญาติ อำเภอเมืองนครพนม นครพนม 48000',
    locationParking: 'มีที่จอดรถกว้างขวาง',
    locationLandmark: 'ใกล้แหล่งสำคัญในตัวเมือง',
    locationOpenMap: 'เปิด Google Maps',

    // Reviews – ภาษาธรรมชาติเหมือนคนรีวิวจริง
    reviewsTitle: 'รีวิวจากคนไข้',
    reviewsSubtitle: 'ความประทับใจจากทุกคน',
    review1Name: 'คุณสมหญิง',
    review1Text:
      'คลินิกสะอาดมากเลยค่ะ คุณหมออธิบายละเอียด เอาใจใส่สุด ๆ ประทับใจจริง ๆ',
    review2Name: 'คุณธนากร',
    review2Text:
      'ขูดหินปูนไม่เจ็บเลย คุณหมอเบามือมาก สถานที่สวย บรรยากาศดี',
    review3Name: 'คุณนิภา',
    review3Text:
      'มาปรึกษาจัดฟัน คุณหมอแนะนำดี ไม่กดดันเลย รู้สึกไว้ใจและอยากทำต่อที่นี่',

    // FAQ – ภาษาคุยกันจริง ๆ
    faqTitle: 'คำถามที่พบบ่อย',
    faq1Q: 'ต้องจองคิวล่วงหน้าหรือเปล่า?',
    faq1A:
      'แนะนำให้จองก่อนจะได้ไม่ต้องรอนาน แต่รับ walk-in ได้นะคะ เราจะเรียงตามลำดับที่มา',
    faq2Q: 'จ่ายเงินยังไงได้บ้าง?',
    faq2A: 'เงินสด โอนเงิน และบัตรเครดิต/เดบิตทั่วไปเลยค่ะ',
    faq3Q: 'รับทำฟันเด็กไหมคะ?',
    faq3A:
      'รับค่ะ คุณหมอมีประสบการณ์ดูแลเด็ก ใช้วิธีอ่อนโยน เหมาะกับน้อง ๆ',
    faq4Q: 'แต่ละครั้งใช้เวลานานแค่ไหน?',
    faq4A:
      'ขึ้นกับบริการเลยค่ะ เช่น ตรวจฟัน ≈ 20-30 นาที, ขูดหินปูน ≈ 40-60 นาที คุณหมอจะบอกเวลาโดยประมาณตอนนัดหมาย',

    // Contact & Booking – ดูเป็นมิตร
    contactTitle: 'ติดต่อเรา & ที่ตั้งคลินิก',
    contactSubtitle: 'ยินดีดูแลรอยยิ้มของคุณ',
    bookingFormTitle: 'แบบฟอร์มนัดหมาย',
    bookingName: 'ชื่อ-นามสกุล',
    bookingPhone: 'เบอร์โทรศัพท์',
    bookingService: 'บริการที่สนใจ',
    bookingServicePlaceholder: 'เลือกบริการ',
    bookingDate: 'วันที่สะดวก',
    bookingTime: 'เวลาที่สะดวก',
    bookingMessage: 'ข้อความเพิ่มเติม (ถ้ามี)',
    bookingSubmit: 'ส่งคำขอ',
    bookingSuccess: 'ส่งสำเร็จแล้วค่ะ เราจะติดต่อกลับเร็ว ๆ นี้',
    contactInfoTitle: 'ช่องทางติดต่อนัดหมาย',
    contactPhone: 'โทรศัพท์',
    contactLine: 'LINE',
    contactFacebook: 'Facebook',

    // Footer
    footerClinicName: 'Smilist Dental Clinic',
    footerLocation: 'เขตเมือง นครพนม ประเทศไทย',
    footerPhone: 'โทร: 081-161-5129',
    footerLine: 'LINE: @smillist',
    footerCopyright: '© 2026 Smilist Dental Clinic. สงวนลิขสิทธิ์',
  },

  en: {
    // Header
    headerServices: 'Services',
    headerDoctor: 'Our Dentist',
    headerPricing: 'Pricing',
    headerReviews: 'Reviews',
    headerContact: 'Contact',
    headerBooking: 'Book Now',

    // Hero – ทำให้สั้น กระชับ ทันสมัย
    heroTitle: 'Gentle Care for Healthy, Confident Smiles',
    heroTitleLine1: 'Gentle Care for',
    heroTitleLine2: 'Confident Smiles',
    heroSubtitle: 'Premium Dental Clinic in the Heart of Nakhon Phanom',
    heroCtaBook: 'Book Appointment',
    heroCtaCall: 'Call 081-161-5129',
    heroCardTitle: 'Opening Hours',
    heroCardHours: 'Tue – Sun: 11:00 AM – 8:00 PM',
    heroCardSunday: 'Monday: Closed',
    heroCardQuickContact: 'Contact',
    heroCardBadge: 'International Standards',

    // Doctor
    doctorTitle: 'Meet Your Dentist',
    doctorName: 'Dr. Chanaporn Phaengdee',
    doctorNameEn: 'ทันตแพทย์หญิงชนาภรณ์ แพงดี',
    doctorRole: 'Clinic Dentist',
    doctorCredential1: 'DDS from a leading university',
    doctorCredential2: 'More than 5 years of clinical experience',
    doctorCredential3: 'Specialized in aesthetics & oral health',
    doctorStatement:
      'We truly care—listening carefully, explaining clearly, and being fully transparent so you feel confident every step of the way.',

    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Complete Care with Premium Standards',
    service1Title: 'Oral Health Check-up',
    service1Desc: 'Thorough exam + personalized consultation',
    service2Title: 'Scaling & Polishing',
    service2Desc: 'Deep clean to keep gums & teeth healthy',
    service3Title: 'Tooth Filling',
    service3Desc: 'High-quality, natural-looking composite fillings',
    service4Title: 'Tooth Extraction',
    service4Desc: 'Gentle, comfortable removal with minimal discomfort',
    service5Title: 'Dental Implants',
    service5Desc: 'World-class implants to restore your confident smile',
    service6Title: 'Orthodontics / Braces Consultation',
    service6Desc: 'Custom smile design & clear treatment planning',

    // Why Smilist
    whyTitle: 'Why Choose Smilist',
    whySubtitle: 'Because we care differently',
    why1Title: 'Premium Cleanliness',
    why1Desc: 'Full sterilization + single-use instruments',
    why2Title: 'Clear & Honest Communication',
    why2Desc: 'We explain everything—no surprises',
    why3Title: 'Modern Technology',
    why3Desc: 'Up-to-date international-standard equipment',
    why4Title: 'Gentle Touch + Aftercare',
    why4Desc: 'Attentive team with proper follow-up support',

    // Pricing – ดูโปร่งใสเป็นมิตร
    pricingTitle: 'Pricing',
    pricingSubtitle: 'Transparent Starting Prices',
    pricingBadge: 'Transparent Pricing',
    pricingCheckup: 'Oral Check-up',
    pricingScaling: 'Scaling & Polishing',
    pricingFilling: 'Tooth Filling',
    pricingExtraction: 'Extraction',
    pricingImplant: 'Dental Implant',
    pricingBraces: 'Orthodontics',
    pricingStarting: 'From',
    pricingDisclaimer: '*Final price depends on clinical assessment & case complexity',
    pricingConsult: 'Get a Quote',

    // Location
    locationTitle: 'Our Location',
    locationSubtitle: 'Conveniently in the city center',
    locationAddress: 'Smilist Clinic',
    locationAddressDetail: '381 21-22 Nityo Road, Nong Yat Subdistrict, Mueang Nakhon Phanom District, Nakhon Phanom Province, 48000, Thailand',
    locationParking: 'Ample parking available',
    locationLandmark: 'Near key landmarks in town',
    locationOpenMap: 'View on Google Maps',

    // Reviews
    reviewsTitle: 'Patient Reviews',
    reviewsSubtitle: 'What our patients say',
    review1Name: 'Ms. Somying',
    review1Text:
      'Super clean clinic, great service. The dentist explained everything clearly—really felt the care.',
    review2Name: 'Mr. Thanakorn',
    review2Text:
      'Pain-free scaling, very gentle hands. Beautiful place, relaxing vibe.',
    review3Name: 'Ms. Nipa',
    review3Text:
      'Came for braces consultation—excellent advice, no pressure at all. I really trust this place.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Do I need to book in advance?',
    faq1A:
      "We recommend booking to save waiting time, but walk-ins are welcome—we'll serve on a first-come basis.",
    faq2Q: 'What payment methods do you accept?',
    faq2A: 'Cash, bank transfer, and major credit/debit cards.',
    faq3Q: 'Do you treat children?',
    faq3A:
      'Yes! Our dentist is experienced with kids and uses gentle, child-friendly techniques.',
    faq4Q: 'How long does each visit take?',
    faq4A:
      "It varies—e.g. check-up ≈ 20-30 min, scaling ≈ 40-60 min. We'll give you an estimate when booking.",

    // Contact & Booking
    contactTitle: 'Contact & Location',
    contactSubtitle: "We're here for your smile",
    bookingFormTitle: 'Appointment Request',
    bookingName: 'Full Name',
    bookingPhone: 'Phone Number',
    bookingService: 'Interested Service',
    bookingServicePlaceholder: 'Select service',
    bookingDate: 'Preferred Date',
    bookingTime: 'Preferred Time',
    bookingMessage: 'Additional Notes (optional)',
    bookingSubmit: 'Send Request',
    bookingSuccess: "Sent successfully! We'll get back to you soon.",
    contactInfoTitle: 'Contact & Booking',
    contactPhone: 'Phone',
    contactLine: 'LINE',
    contactFacebook: 'Facebook',

    // Footer
    footerClinicName: 'Smilist Dental Clinic',
    footerLocation: 'Mueang District, Nakhon Phanom, Thailand',
    footerPhone: 'Tel: 081-161-5129',
    footerLine: 'LINE: @smillist',
    footerCopyright: '© 2026 Smilist Dental Clinic. All rights reserved.',
  },
}