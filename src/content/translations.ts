export type Language = 'th' | 'en'

export const translations = {
  th: {
    // Header
    headerServices: 'บริการ',
    headerDoctor: 'ทันตแพทย์',
    headerPricing: 'ราคา',
    headerReviews: 'รีวิว',
    headerContact: 'ติดต่อ',
    headerBooking: 'นัดหมาย',

    // Hero
    heroTitle: 'ดูแลสุขภาพฟันอย่างใส่ใจ มั่นใจทุกยิ้ม',
    heroTitleLine1: 'ดูแลสุขภาพฟันอย่าง',
    heroTitleLine2: 'ใส่ใจ มั่นใจทุกยิ้ม',
    heroSubtitle: 'คลินิกทันตกรรมคุณภาพ ใจกลางเมืองนครพนม',
    heroCtaBook: 'นัดหมาย',
    heroCtaCall: 'โทร 083-345-7812',
    heroCardTitle: 'เปิดให้บริการ',
    heroCardHours: 'จันทร์-เสาร์: 9:00-18:00',
    heroCardSunday: 'อาทิตย์: ปิด',
    heroCardQuickContact: 'ติดต่อด่วน',
    heroCardBadge: 'มาตรฐานความสะอาด',

    // Doctor
    doctorTitle: 'ทันตแพทย์ผู้เชี่ยวชาญ',
    doctorName: 'ทันตแพทย์หญิงชนาภรณ์ แพงดี',
    doctorNameEn: 'Dr. Chanaporn Phaengdee',
    doctorRole: 'ทันตแพทย์ประจำคลินิค',
    doctorCredential1: 'ทันตแพทย์ศาสตรบัณฑิต มหาวิทยาลัยชั้นนำ',
    doctorCredential2: 'ประสบการณ์กว่า 5 ปี ในการดูแลสุขภาพช่องปาก',
    doctorCredential3: 'เชี่ยวชาญด้านความสวยงามและสุขภาพฟัน',
    doctorStatement:
      'ปรัชญาของเราคือการดูแลทุกคนด้วยความใส่ใจ ฟังปัญหาอย่างตั้งใจ และให้คำปรึกษาที่โปร่งใสชัดเจน เพื่อให้คุณมั่นใจในทุกการรักษา',

    // Services
    servicesTitle: 'บริการของเรา',
    servicesSubtitle: 'ดูแลครบวงจรด้วยมาตรฐานระดับพรีเมียม',
    service1Title: 'ตรวจสุขภาพช่องปาก',
    service1Desc: 'ตรวจประเมินโดยละเอียด พร้อมให้คำปรึกษาตามสภาพปัจจุบัน',
    service2Title: 'ขูดหินปูน',
    service2Desc: 'ทำความสะอาดเชิงลึก ป้องกันปัญหาเหงือกและฟัน',
    service3Title: 'อุดฟัน',
    service3Desc: 'อุดฟันผุด้วยวัสดุคุณภาพสูง ธรรมชาติและสวยงาม',
    service4Title: 'ถอนฟัน',
    service4Desc: 'การถอนฟันที่อ่อนโยน ลดความกังวลและปวดน้อยที่สุด',
    service5Title: 'รากฟันเทียม',
    service5Desc: 'ปลูกฟันเทียมมาตรฐานสากล คืนรอยยิ้มให้คุณอย่างมั่นใจ',
    service6Title: 'จัดฟัน / ปรึกษาจัดฟัน',
    service6Desc: 'ออกแบบรอยยิ้มที่สวยงาม พร้อมให้คำปรึกษาแผนการจัดฟัน',

    // Why Smilist
    whyTitle: 'ทำไมต้อง Smilist',
    whySubtitle: 'ประสบการณ์ที่เหนือกว่า',
    why1Title: 'มาตรฐานความสะอาดระดับพรีเมียม',
    why1Desc: 'ฆ่าเชื้อเครื่องมือทุกชิ้น ใช้อุปกรณ์แบบใช้ครั้งเดียวทิ้ง',
    why2Title: 'สื่อสารชัดเจน แผนการรักษาโปร่งใส',
    why2Desc: 'อธิบายขั้นตอนทุกอย่าง คุณเข้าใจและมั่นใจก่อนเริ่มทำ',
    why3Title: 'อุปกรณ์ทันสมัย',
    why3Desc: 'เครื่องมือและเทคโนโลยีระดับมาตรฐานสากล',
    why4Title: 'ดูแลอย่างอ่อนโยนและติดตามหลังรักษา',
    why4Desc: 'ทีมงานเอาใจใส่ คอยดูแลและให้คำแนะนำหลังทำฟัน',

    // Pricing
    pricingTitle: 'ราคาบริการ',
    pricingSubtitle: 'โปร่งใส มั่นใจ ราคาเริ่มต้น',
    pricingBadge: 'ราคาโปร่งใส',
    pricingCheckup: 'ตรวจสุขภาพช่องปาก',
    pricingScaling: 'ขูดหินปูน',
    pricingFilling: 'อุดฟัน',
    pricingExtraction: 'ถอนฟัน',
    pricingImplant: 'รากฟันเทียม',
    pricingBraces: 'จัดฟัน',
    pricingStarting: 'เริ่มต้น',
    pricingDisclaimer: '* ราคาขึ้นอยู่กับการประเมินของแพทย์และความซับซ้อนของการรักษา',
    pricingConsult: 'สอบถามเพิ่มเติม',

    // Location
    locationTitle: 'สถานที่ตั้งคลินิค',
    locationSubtitle: 'ใจกลางเมือง สะดวกสบาย',
    locationAddress: 'เขตเมือง จังหวัดนครพนม',
    locationAddressDetail: '(ที่อยู่โดยละเอียดจะระบุเร็วๆ นี้)',
    locationParking: 'มีที่จอดรถสะดวก',
    locationLandmark: 'ใกล้จุดสังเกตสำคัญในเขตเมือง',
    locationOpenMap: 'เปิดใน Google Maps',

    // Reviews
    reviewsTitle: 'รีวิวจากผู้ใช้บริการ',
    reviewsSubtitle: 'ความไว้วางใจจากลูกค้าของเรา',
    review1Name: 'คุณสมหญิง',
    review1Text:
      'คลินิกสะอาดมาก บริการดี แพทย์อธิบายรายละเอียดชัดเจน ประทับใจที่สุดคือความเอาใจใส่',
    review2Name: 'คุณธนากร',
    review2Text:
      'ขูดหินปูนที่นี่รู้สึกไม่เจ็บเลย แพทย์ทำอย่างอ่อนโยน สถานที่หรูหรา บรรยากาศดี',
    review3Name: 'คุณนิภา',
    review3Text:
      'มาปรึกษาเรื่องจัดฟัน แพทย์ให้คำแนะนำดีมาก ไม่เร่งขาย รู้สึกเชื่อใจและมั่นใจที่จะทำกับที่นี่',

    // FAQ
    faqTitle: 'คำถามที่พบบ่อย',
    faq1Q: 'ต้องนัดหมายก่อนหรือไม่?',
    faq1A:
      'แนะนำให้นัดหมายล่วงหน้าเพื่อลดระยะเวลารอคอย แต่เรายินดีรับ walk-in ได้เช่นกัน โดยจะให้บริการตามลำดับ',
    faq2Q: 'รับชำระเงินด้วยวิธีใดบ้าง?',
    faq2A: 'รับชำระเงินสด, โอนเงิน, และบัตรเครดิต/เดบิตทั่วไป',
    faq3Q: 'รับรักษาเด็กไหม?',
    faq3A:
      'รับรักษาเด็กค่ะ แพทย์มีประสบการณ์ดูแลเด็ก และใช้วิธีการที่อ่อนโยนเหมาะกับเด็กๆ',
    faq4Q: 'การรักษาแต่ละครั้งใช้เวลานานแค่ไหน?',
    faq4A:
      'ขึ้นอยู่กับบริการ เช่น ตรวจสุขภาพช่องปากประมาณ 20-30 นาที ขูดหินปูนประมาณ 40-60 นาที แพทย์จะแจ้งเวลาโดยประมาณเมื่อนัดหมาย',

    // Contact & Booking
    contactTitle: 'นัดหมายและติดต่อ',
    contactSubtitle: 'เราพร้อมดูแลคุณ',
    bookingFormTitle: 'ฟอร์มนัดหมาย',
    bookingName: 'ชื่อ-นามสกุล',
    bookingPhone: 'เบอร์โทรศัพท์',
    bookingService: 'บริการที่สนใจ',
    bookingServicePlaceholder: 'เลือกบริการ',
    bookingDate: 'วันที่ต้องการนัด',
    bookingTime: 'เวลาที่ต้องการนัด',
    bookingMessage: 'ข้อความเพิ่มเติม (ถ้ามี)',
    bookingSubmit: 'ส่งคำขอนัดหมาย',
    bookingSuccess: 'ส่งคำขอสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้',
    contactInfoTitle: 'ติดต่อด่วน',
    contactPhone: 'โทรศัพท์',
    contactLine: 'LINE',
    contactFacebook: 'Facebook',

    // Footer
    footerClinicName: 'Smilist Dental Clinic',
    footerLocation: 'เขตเมือง นครพนม ประเทศไทย',
    footerPhone: 'โทร: 083-345-7812',
    footerLine: 'LINE: @smillist',
    footerCopyright: '© 2026 Smilist Dental Clinic. All rights reserved.',
  },
  en: {
    // Header
    headerServices: 'Services',
    headerDoctor: 'Doctor',
    headerPricing: 'Pricing',
    headerReviews: 'Reviews',
    headerContact: 'Contact',
    headerBooking: 'Book Appointment',

    // Hero
    heroTitle: 'Quality dental care. Confident smile.',
    heroTitleLine1: 'Quality dental care.',
    heroTitleLine2: 'Confident smile.',
    heroSubtitle: 'Quality dental clinic in the heart of Nakhon Phanom',
    heroCtaBook: 'Book Appointment',
    heroCtaCall: 'Call 083-345-7812',
    heroCardTitle: 'Opening Hours',
    heroCardHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    heroCardSunday: 'Sunday: Closed',
    heroCardQuickContact: 'Quick Contact',
    heroCardBadge: 'Hygiene Standard',

    // Doctor
    doctorTitle: 'Expert Dentist',
    doctorName: 'Dr. Chanaporn Phaengdee',
    doctorNameEn: 'แพทย์หญิงชนาภรณ์ แพงดี',
    doctorRole: 'Clinic Dentist',
    doctorCredential1: 'Doctor of Dental Surgery from leading university',
    doctorCredential2: 'Over 5 years of experience in oral healthcare',
    doctorCredential3: 'Specializing in aesthetic and dental health',
    doctorStatement:
      'Our philosophy is to care for everyone with attention, listen to problems carefully, and provide transparent consultation so you can be confident in every treatment.',

    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive care with premium standards',
    service1Title: 'Oral Health Checkup',
    service1Desc: 'Thorough evaluation with consultation based on current condition',
    service2Title: 'Teeth Scaling',
    service2Desc: 'Deep cleaning to prevent gum and tooth problems',
    service3Title: 'Tooth Filling',
    service3Desc: 'Fill cavities with high-quality, natural-looking materials',
    service4Title: 'Tooth Extraction',
    service4Desc: 'Gentle extraction with minimal worry and pain',
    service5Title: 'Dental Implant',
    service5Desc: 'International standard implants to restore your confident smile',
    service6Title: 'Orthodontics / Consultation',
    service6Desc: 'Design a beautiful smile with orthodontic treatment plan',

    // Why Smilist
    whyTitle: 'Why Smilist',
    whySubtitle: 'An experience beyond expectations',
    why1Title: 'Premium Hygiene Standard',
    why1Desc: 'Every instrument sterilized, single-use disposable equipment',
    why2Title: 'Clear Communication & Transparent Treatment Plan',
    why2Desc: 'Explain every step so you understand and feel confident before we start',
    why3Title: 'Modern Equipment',
    why3Desc: 'International standard tools and technology',
    why4Title: 'Gentle Care & Post-Treatment Follow-up',
    why4Desc: 'Attentive team provides care and advice after treatment',

    // Pricing
    pricingTitle: 'Service Pricing',
    pricingSubtitle: 'Transparent & Reliable Pricing',
    pricingBadge: 'Transparent Pricing',
    pricingCheckup: 'Oral Health Checkup',
    pricingScaling: 'Teeth Scaling',
    pricingFilling: 'Tooth Filling',
    pricingExtraction: 'Tooth Extraction',
    pricingImplant: 'Dental Implant',
    pricingBraces: 'Orthodontics',
    pricingStarting: 'Starting from',
    pricingDisclaimer:
      '* Prices depend on dentist evaluation and treatment complexity',
    pricingConsult: 'Ask for more info',

    // Location
    locationTitle: 'Clinic Location',
    locationSubtitle: 'City center, easy access',
    locationAddress: 'Mueang District, Nakhon Phanom',
    locationAddressDetail: '(Detailed address coming soon)',
    locationParking: 'Convenient parking available',
    locationLandmark: 'Near major landmarks in Mueang District',
    locationOpenMap: 'Open in Google Maps',

    // Reviews
    reviewsTitle: 'Reviews from Our Patients',
    reviewsSubtitle: 'Trust from our customers',
    review1Name: 'Ms. Somying',
    review1Text:
      'Very clean clinic, good service. The dentist explained everything clearly. Most impressed by the attentive care.',
    review2Name: 'Mr. Thanakorn',
    review2Text:
      'Teeth scaling here was painless. The dentist was very gentle. Luxurious place with great atmosphere.',
    review3Name: 'Ms. Nipa',
    review3Text:
      'Came for orthodontic consultation. The dentist gave excellent advice, no pushy sales. Feel trustworthy and confident to proceed here.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Do I need an appointment?',
    faq1A:
      'We recommend booking in advance to reduce waiting time, but we also welcome walk-ins on a first-come, first-served basis.',
    faq2Q: 'What payment methods do you accept?',
    faq2A: 'We accept cash, bank transfer, and major credit/debit cards.',
    faq3Q: 'Do you treat children?',
    faq3A:
      'Yes, we treat children. Our dentist has experience with kids and uses gentle, child-friendly methods.',
    faq4Q: 'How long does each treatment take?',
    faq4A:
      'It depends on the service. For example, oral checkup takes about 20-30 minutes, teeth scaling about 40-60 minutes. The dentist will inform you of the estimated time when you book.',

    // Contact & Booking
    contactTitle: 'Booking & Contact',
    contactSubtitle: 'We are ready to care for you',
    bookingFormTitle: 'Booking Form',
    bookingName: 'Full Name',
    bookingPhone: 'Phone Number',
    bookingService: 'Service of Interest',
    bookingServicePlaceholder: 'Select a service',
    bookingDate: 'Preferred Date',
    bookingTime: 'Preferred Time',
    bookingMessage: 'Additional Message (optional)',
    bookingSubmit: 'Submit Booking Request',
    bookingSuccess: 'Request sent successfully! We will contact you soon.',
    contactInfoTitle: 'Quick Contact',
    contactPhone: 'Phone',
    contactLine: 'LINE',
    contactFacebook: 'Facebook',

    // Footer
    footerClinicName: 'Smilist Dental Clinic',
    footerLocation: 'Mueang District, Nakhon Phanom, Thailand',
    footerPhone: 'Tel: 083-345-7812',
    footerLine: 'LINE: @smillist',
    footerCopyright: '© 2026 Smilist Dental Clinic. All rights reserved.',
  },
}
