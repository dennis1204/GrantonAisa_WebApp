export type Language = 'zh-HK' | 'en';

export interface Translations {
  common: {
    brandName: string;
    brandFullName: string;
    brandSubtitle: string;
    navAbout: string;
    navServices: string;
    navProcess: string;
    navCalculator: string;
    navContact: string;
    navApply: string;
    navEnquiry: string;
    language: string;
    switchLangPrompt: string;
    tradChinese: string;
    english: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    applyNow: string;
    calculate: string;
    warning: string;
    trustTitle: string;
    trustDesc: string;
  };
  about: {
    badge: string;
    heading: string;
    introP1: string;
    introP2: string;
    section1Title: string;
    section1Desc: string;
    section2Title: string;
    section2Desc: string;
    conclusion: string;
    stats: {
      stat1Number: string;
      stat1Label: string;
      stat2Number: string;
      stat2Label: string;
      stat3Number: string;
      stat3Label: string;
      stat4Number: string;
      stat4Label: string;
    };
  };
  services: {
    badge: string;
    heading: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      highlight: string;
      desc: string;
      features: string[];
      suitableFor: string;
    }>;
  };
  process: {
    badge: string;
    heading: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      time: string;
      desc: string;
    }>;
    tipTitle: string;
    tipDesc: string;
  };
  calculator: {
    heading: string;
    subtitle: string;
    loanAmount: string;
    repaymentPeriod: string;
    monthsUnit: string;
    minAmount: string;
    maxAmount: string;
    minMonths: string;
    maxMonths: string;
    estimatedHeading: string;
    aprNote: string;
    monthlyPayment: string;
    totalAmount: string;
    totalInterest: string;
    totalRepayment: string;
    applyCta: string;
  };
  form: {
    heading: string;
    subtitle: string;
    personalDetails: string;
    fullName: string;
    fullNamePlaceholder: string;
    hkid: string;
    hkidPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    loanRequirements: string;
    loanAmount: string;
    loanAmountPlaceholder: string;
    loanPurpose: string;
    selectPurpose: string;
    purposeOptions: {
      debtConsolidation: string;
      homeRenovation: string;
      business: string;
      education: string;
      medical: string;
      other: string;
    };
    employmentStatus: string;
    selectEmployment: string;
    employmentOptions: {
      fullTime: string;
      partTime: string;
      selfEmployed: string;
      unemployed: string;
    };
    termsAgreePrefix: string;
    termsLink: string;
    termsAnd: string;
    privacyLink: string;
    picsLink: string;
    termsAgreeSuffix: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    companyName: string;
    licenceNo: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    whatsappLabel: string;
    whatsappValue: string;
    openEnquiryFormBtn: string;
    quickCallBtn: string;
    whatsappBtn: string;
    directions: string;
  };
  enquiry: {
    badge: string;
    heading: string;
    subtitle: string;
    supporterTargetLabel: string;
    supporterEmailNote: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    category: string;
    selectCategory: string;
    categories: {
      eligibility: string;
      ratesAndTerms: string;
      applicationStatus: string;
      documents: string;
      earlyRepayment: string;
      other: string;
    };
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendToSupporterBtn: string;
    sending: string;
    openInEmailAppBtn: string;
    copyEmailBtn: string;
    copied: string;
    successTitle: string;
    successDesc: string;
    ticketLabel: string;
    dispatchedToLabel: string;
    timeLabel: string;
    viewHistoryTab: string;
    newEnquiryTab: string;
    noHistoryText: string;
    closeBtn: string;
    floatingButtonLabel: string;
    floatingBadge: string;
    directContactCardTitle: string;
    directContactCardDesc: string;
    emailSupporterDirectly: string;
    responseTimeNote: string;
  };
  legal: {
    tabs: {
      pics: string;
      mloSummary: string;
      disclaimer: string;
      privacy: string;
      terms: string;
    };
    picsContent: {
      title: string;
      sections: Array<{
        title: string;
        body: string;
      }>;
    };
    mloContent: {
      title: string;
      preamble: string;
      provisions: Array<{
        section: string;
        title: string;
        content: string;
      }>;
    };
    disclaimerContent: {
      title: string;
      paragraphs: string[];
    };
  };
  footer: {
    description: string;
    licence: string;
    quickLinks: string;
    servicesTitle: string;
    legal: string;
    aboutUs: string;
    loanServices: string;
    applicationProcess: string;
    contactUs: string;
    pics: string;
    mloSummary: string;
    disclaimer: string;
    privacyPolicy: string;
    termsOfService: string;
    allRightsReserved: string;
    statutoryWarning: string;
  };
}

export const translations: Record<Language, Translations> = {
  'zh-HK': {
    common: {
      brandName: '盈滙亞洲',
      brandFullName: '盈滙亞洲有限公司',
      brandSubtitle: 'Granton Asia Limited · 持牌放債人',
      navAbout: '公司簡介',
      navServices: '貸款服務',
      navProcess: '申請流程',
      navCalculator: '貸款計算機',
      navContact: '聯絡我們',
      navApply: '立即申請',
      navEnquiry: '專人查詢',
      language: '語言',
      switchLangPrompt: '切換至英文 / English',
      tradChinese: '繁體中文',
      english: 'English',
    },
    hero: {
      badge: '香港專業物業按揭與信貸融資服務',
      titlePart1: '盈滙亞洲 · 助您開拓靈活資金',
      titleHighlight: '專業信貸服務',
      titlePart2: '',
      subtitle: '盈滙亞洲有限公司（Granton Asia Limited）立足香港。我們致力以誠信、專業及透明的經營理念，為個人及中小企業提供全方位靈活貸款方案。極速審批，特惠低息，助您把握良機。',
      applyNow: '立即網上申請',
      calculate: '即時計算還款',
      warning: '忠告：借錢梗要還，咪俾錢中介',
      trustTitle: '合法持牌 · 資料保密',
      trustDesc: '遵從香港法例第163章《放債人條例》',
    },
    about: {
      badge: '關於盈滙亞洲',
      heading: '專注按揭貸款，以客戶需要為本',
      introP1: '盈滙亞洲有限公司（Granton Asia Limited）立足香港，專注按揭貸款業務，致力為有物業融資需要的客戶提供合適的貸款方案。',
      introP2: '我們重視每一位客戶的個別情況，以物業狀況、資金需要及還款能力為考量，協助客戶了解按揭貸款安排，讓客戶在作出融資決定前，清楚掌握相關條款及還款責任。',
      section1Title: '用心聆聽，細心跟進',
      section1Desc: '我們以「專業、誠信、可靠」為服務理念，用心聆聽客戶需求，並重視每個服務環節。從初步諮詢、資料準備到申請跟進，我們致力提供清晰的說明及適切的協助，讓客戶更容易了解及處理按揭貸款事宜。',
      section2Title: '誠信為本，重視長遠關係',
      section2Desc: '我們相信，信任建基於透明溝通及負責任的服務。因此，我們重視貸款條款、相關費用及還款安排的清晰說明，鼓勵客戶審慎評估自身財務狀況及還款能力，選擇切合實際需要的融資方案。',
      conclusion: '盈滙亞洲期望透過務實、細心的服務，成為客戶在物業融資路上值得信賴的合作夥伴。',
      stats: {
        stat1Number: '99.2%',
        stat1Label: '客戶滿意度',
        stat2Number: '24小時',
        stat2Label: '最快批核放款',
        stat3Number: '按揭專項',
        stat3Label: '物業融資諮詢',
        stat4Number: '100%',
        stat4Label: '合規持牌營運',
      },
    },
    services: {
      badge: '多元化融資方案',
      heading: '貸款服務 (Loan Services)',
      subtitle: '針對不同客戶的財務需要，盈滙亞洲提供多元化彈性貸款產品，助您輕鬆應對日常生活及商業營運資金需求。',
      items: [
        {
          id: 'personal',
          title: '私人貸款 (Personal Loan)',
          highlight: '彈性現金週轉 · 毋須抵押品',
          desc: '專為受薪僱員及專業人士設計，手續簡易，毋須任何資產抵押，貸款額最高達 HK$1,000,000，還款期長達60個月。',
          features: ['貸款額高達 HK$1,000,000', '還款期 6 至 60 個月', '特惠實際年利率優惠', '毋須任何抵押品或擔保人'],
          suitableFor: '個人消費、裝修、進修、醫療或應急現金流',
        },
        {
          id: 'balance_transfer',
          title: '卡數結餘轉戶 (Balance Transfer)',
          highlight: '清還多筆高息債務 · 節省利息高達90%',
          desc: '集中處理多張信用卡卡數及私人貸款，將高達30%以上的信用卡外卡利率轉為特惠低息，大幅減輕每月供款負擔。',
          features: ['一筆過清還多張卡數及外債', '大幅節省利息開支', '固定每月還款金額及期數', '改善個人信貸評級 (TU)'],
          suitableFor: '持有多張高息卡數或希望整合多項債務之人士',
        },
        {
          id: 'property',
          title: '業主物業貸款 (Property Owner Loan)',
          highlight: '私樓、居屋、村屋均可 · 大額融資首選',
          desc: '為業主量身定制的高額貸款方案，不論一按、二按或轉按，均可充分釋放物業潛在價值，利率更優惠，額度更充裕。',
          features: ['貸款額最高可達物業估值之八成', '私樓、唐樓、未補地價公居屋均可諮詢', '審批手續迅速，彈性還款期', '物業毋須轉名，保留居住權'],
          suitableFor: '有大額資金需求之物業業主或置業投資者',
        },
        {
          id: 'sme',
          title: '中小企商業貸款 (SME Business Loan)',
          highlight: '生意營運週轉 · 把握市場商機',
          desc: '專為香港本地中小企業及自僱東主提供之靈活融資支持，應對租金、出糧、入貨或業務拓展等關鍵資金流轉。',
          features: ['彈性額度因應業務營業額釐定', '文件要求簡單，加快審批進度', '支援隨借隨還或固定供款', '專人一對一跟進商業信貸'],
          suitableFor: '本地註冊公司、網店東主及自僱商業營運者',
        },
      ],
    },
    process: {
      badge: '4步輕鬆完成',
      heading: '申請流程 (Application Process)',
      subtitle: '簡單清晰的申請四部曲，全程透明高效，讓您在最短時間內獲得所需資金。',
      steps: [
        {
          step: '01',
          title: '網上提交申請',
          time: '約 3 分鐘',
          desc: '填妥網上申請表，選擇所需貸款額度及還款期數，並遞交基本聯絡資料。',
        },
        {
          step: '02',
          title: '專員極速審批',
          time: '最快 30 分鐘回覆',
          desc: '盈滙亞洲信貸專員即時核對資料，並進行初步信用評估，向您解釋專屬貸款方案。',
        },
        {
          step: '03',
          title: '確認條款及簽約',
          time: '專人詳細解說',
          desc: '雙方確認貸款合約條款、利率及還款日程，清晰無誤後完成簽署合約手續。',
        },
        {
          step: '04',
          title: '即日放款到戶',
          time: '最快當日到手',
          desc: '手續辦妥後，款項將以「轉數快 (FPS)」或銀行轉賬直接存入閣下之指定本地銀行戶口。',
        },
      ],
      tipTitle: '溫馨提示：準備以下文件可加快批核進度',
      tipDesc: '香港身份證副本、最近3個月住址證明（如水電煤單或銀行月結單）、最近3個月薪金證明（如糧單或銀行入息記錄）。',
    },
    calculator: {
      heading: '計算您的預計還款',
      subtitle: '利用盈滙亞洲互動貸款計算機，自由拖動貸款金額及還款期數，即時掌握每月供款額及總利息支出，財務預算一目了然。',
      loanAmount: '貸款金額',
      repaymentPeriod: '還款期數',
      monthsUnit: '個月',
      minAmount: 'HK$10,000',
      maxAmount: 'HK$1,000,000',
      minMonths: '6 個月',
      maxMonths: '60 個月',
      estimatedHeading: '每月預計還款估算',
      aprNote: '以參考實際年利率 (APR) 4.5% 計算',
      monthlyPayment: '每月預計供款',
      totalAmount: '申請貸款總額',
      totalInterest: '總預計利息支出',
      totalRepayment: '總還款金額',
      applyCta: '以現有計算申請貸款',
    },
    form: {
      heading: '網上申請貸款',
      subtitle: '填寫以下加密表格，只需簡單幾步，盈滙亞洲信貸顧問將第一時間為您跟進審批。',
      personalDetails: '個人聯絡資料',
      fullName: '全名 (須與身份證一致)',
      fullNamePlaceholder: '例如：陳大文 / Chan Tai Man',
      hkid: '香港身份證號碼',
      hkidPlaceholder: '例如：A123456(7)',
      phone: '聯絡電話 (可接收 SMS)',
      phonePlaceholder: '+852 9123 4567',
      email: '電郵地址',
      emailPlaceholder: 'name@example.com',
      loanRequirements: '貸款需求與財務狀況',
      loanAmount: '希望申請貸款額 (港幣)',
      loanAmountPlaceholder: '100000',
      loanPurpose: '貸款用途',
      selectPurpose: '請選擇貸款用途...',
      purposeOptions: {
        debtConsolidation: '清還信用卡卡數 / 債務重組',
        homeRenovation: '家居裝修及傢俬',
        business: '中小企營運 / 生意週轉',
        education: '持續進修及培訓',
        medical: '應急或醫療開支',
        other: '其他個人用途',
      },
      employmentStatus: '就業及工作狀況',
      selectEmployment: '請選擇就業狀況...',
      employmentOptions: {
        fullTime: '全職受薪僱員',
        partTime: '兼職 / 合約員工',
        selfEmployed: '自僱人士 / 公司東主',
        unemployed: '自由工作者 / 其他',
      },
      termsAgreePrefix: '本人確認已詳細閱讀並同意',
      termsLink: '服務條款',
      termsAnd: '、',
      privacyLink: '私隱政策',
      picsLink: '個人資料收集聲明',
      termsAgreeSuffix: '。本人同意盈滙亞洲有限公司根據條款向持牌信貸資料庫查核信用評級並進行資料核實。',
      submit: '立即遞交申請',
      submitting: '資料加密傳送中...',
      successTitle: '申請已成功提交！',
      successDesc: '感謝閣下選擇盈滙亞洲有限公司。我們已妥善接收您的申請資料，專屬貸款主任將於24小時內致電或透過 WhatsApp 與您聯絡。',
      submitAnother: '遞交另一項申請',
    },
    contact: {
      badge: '客戶服務與聯絡方式',
      heading: '聯絡我們 (Contact Us)',
      subtitle: '如有任何關於貸款產品、申請進度或還款查詢，歡迎隨時透過電話、電郵、WhatsApp 或親臨本公司與信貸顧問聯絡。',
      companyName: '盈滙亞洲有限公司 (Granton Asia Limited)',
      licenceNo: '香港按揭融資專項 · 誠信專業',
      addressLabel: '辦事處地址 (Address)',
      addressValue: '香港九龍觀塘成業街10號電訊一代廣場22樓C2室',
      phoneLabel: '電話 (Tel)',
      phoneValue: '+852 3996 8798',
      emailLabel: '電郵 (Email)',
      emailValue: 'sales@grantonasia.com.hk',
      hoursLabel: '辦公時間',
      hoursValue: '星期一至五：09:30 - 18:30 | 星期六：09:30 - 13:00 (星期日及公眾假期休息)',
      whatsappLabel: 'WhatsApp 即時專線',
      whatsappValue: '+852 3996 8798',
      openEnquiryFormBtn: '填寫在線查詢表格',
      quickCallBtn: '致電客服專線',
      whatsappBtn: 'WhatsApp 線上諮詢',
      directions: '鄰近港鐵觀塘站 B1/B2 出口，步行約5分鐘即可抵達。',
    },
    enquiry: {
      badge: '專人客服與信貸諮詢',
      heading: '即時客戶查詢 (直接發送至專員電郵)',
      subtitle: '對貸款額度、利率優惠、審批程序或提前還款有任何疑問？填妥查詢表即可直接發送至盈滙亞洲專員電郵，專人於24小時內為您解答。',
      supporterTargetLabel: '專員接收電郵 (Supporter Email)',
      supporterEmailNote: '查詢將即時發送至上述專員電郵，確保專人即時跟進處理。',
      name: '您的姓名 / 稱謂',
      namePlaceholder: '例如：陳先生 / Mr. Chan',
      email: '您的聯絡電郵',
      emailPlaceholder: 'your.email@example.com',
      phone: '聯絡電話 / WhatsApp',
      phonePlaceholder: '+852 9876 5432',
      category: '查詢類別',
      selectCategory: '請選擇查詢項目...',
      categories: {
        eligibility: '貸款資格及批核額度預估',
        ratesAndTerms: '利率優惠方案及還款期諮詢',
        applicationStatus: '現有貸款申請進度跟進',
        documents: '證明文件要求及上載指引',
        earlyRepayment: '提前還款及利息清減計算',
        other: '其他專屬信貸諮詢',
      },
      subject: '查詢主題',
      subjectPlaceholder: '例如：查詢20萬私人貸款審批時間',
      message: '查詢內容詳情',
      messagePlaceholder: '請詳細列明您的疑問或特別財務需求，專員將為您度身分析...',
      sendToSupporterBtn: '發送至專員電郵',
      sending: '傳送至專員電郵中...',
      openInEmailAppBtn: '在郵件軟件中開啟發送 (Mailto)',
      copyEmailBtn: '複製完整電郵內容',
      copied: '已複製完整電郵內容！',
      successTitle: '查詢已成功發送至專員！',
      successDesc: '感謝您的查詢。系統已將您的查詢詳情妥善傳送給盈滙亞洲支援專員，專員將於 24 小時內透過電郵或電話與您跟進。',
      ticketLabel: '查詢編號',
      dispatchedToLabel: '已發送至專員電郵',
      timeLabel: '提交時間',
      viewHistoryTab: '查詢記錄',
      newEnquiryTab: '填寫新查詢',
      noHistoryText: '暫無發送給專員的查詢記錄。',
      closeBtn: '完成並關閉',
      floatingButtonLabel: '專人查詢',
      floatingBadge: '專員在線',
      directContactCardTitle: '需要即時專人支援？',
      directContactCardDesc: '盈滙亞洲經驗豐富的貸款專家全方位為您解答。您可以隨時填寫查詢表，或直接致函至專員郵箱。',
      emailSupporterDirectly: '直接致函專員郵箱',
      responseTimeNote: '平均回覆時間：最快 2 小時，承諾 24 小時內回覆',
    },
    legal: {
      tabs: {
        pics: '個人資料收集聲明',
        mloSummary: '放債人條例條文撮要',
        disclaimer: '免責聲明',
        privacy: '私隱政策聲明',
        terms: '服務條款及細則',
      },
      picsContent: {
        title: '個人資料收集聲明 (Personal Information Collection Statement - PICS)',
        sections: [
          {
            title: '1. 收集個人資料的目的',
            body: '盈滙亞洲有限公司（「本公司」）在閣下申請貸款、進行諮詢或使用本公司服務時，將收集閣下的個人資料。資料將用於：(a) 評估閣下的信貸申請及財務狀況；(b) 進行身份核實及防範詐騙行為；(c) 批出及管理相關貸款賬戶；(d) 履行香港法律法規（包括《放債人條例》及打擊洗錢指引）下的法定披露義務；(e) 追討任何拖欠款項。',
          },
          {
            title: '2. 資料轉移之對象類別',
            body: '本公司持有的客戶個人資料將嚴格保密，但在必要情況下可能向下列各方披露：(a) 信貸資料服務機構（CRA）以查核信貸報告；(b) 債務追討代理人或律師事務所以追討拖欠金額；(c) 本公司的專業顧問、審計師及資訊科技服務供應商；(d) 任何根據香港適用法律有權要求披露的執法機關、法院或監管機構。',
          },
          {
            title: '3. 查閱及更正個人資料的權利',
            body: '根據香港法例第486章《個人資料（私隱）條例》，閣下有權查閱本公司是否持有閣下的個人資料，並有權要求獲取該等資料之副本及更正任何不準確之處。如欲行使上述權利，可書面聯絡本公司資料保護主任（電郵：sales@grantonasia.com.hk 或郵寄至香港九龍觀塘成業街10號電訊一代廣場22樓C2室）。本公司保留就處理資料查閱要求收取合理行政費用的權利。',
          },
          {
            title: '4. 資料保留政策',
            body: '本公司將在達成收集目的所需期間內，或按照法例規定的法定保存期限（通常為賬戶終止後至少七年）保留閣下的個人資料。逾期後本公司將安全銷毀或匿名化處理有關資料。',
          },
        ],
      },
      mloContent: {
        title: '《放債人條例》（香港法例第163章）條文撮要 (Summary of Provisions of the Money Lenders Ordinance)',
        preamble: '以下撮要依據香港《放債人條例》（第163章）第18條及附表4規定刊載，旨在告知借款人其於該條例下之主要法定權益及保障：',
        provisions: [
          {
            section: '第 18 條',
            title: '放債人協議之形式及內容要求',
            content: '任何貸款協議必須以書面訂立，並由借款人於訂立協議時親自簽署。協議中必須載明全部重要條款，包括本金金額、實際年利率、還款期數、每期還款額及任何抵押品詳情。放債人必須在簽署協議後7天內，將協議副本交付借款人。未符合本條規定之協議將屬不可強制執行。',
          },
          {
            section: '第 19 條',
            title: '向借款人提供賬目陳述書之責任',
            content: '借款人隨時有權以書面要求放債人提供一份顯示已還款金額、尚未清還本金及利息結餘之賬目陳述書。放債人在收到要求及合理費用後，必須於合理時間內提供該陳述書。',
          },
          {
            section: '第 21 條',
            title: '禁止收取複利及過高收費',
            content: '除該條例明確准許者外，任何要求借款人繳付複利、或因拖欠還款而收取高於原有正常利率之懲罰性利息的條款，均屬無效及不可強制執行。放債人不得就貸款協商、處理或審批向借款人收取任何法律規定以外之附帶費用或中介佣金。',
          },
          {
            section: '第 24 & 25 條',
            title: '法定最高年利率上限規定',
            content: '根據《放債人條例》第24條，任何貸款協議之實際年利率（APR）不得超過法定上限年息48%（法例於2022年12月30日起修訂生效）。若實際年利率超過年息36%，該筆貸款將被推定為敲詐性及敲詐利率，法院有權重新審查條款並予以寬免或改動。',
          },
          {
            section: '法定警告',
            title: '持牌放債人重要忠告告示',
            content: '「忠告：借錢梗要還，咪俾錢中介」——此乃放債人牌照條件規定必須於所有推廣物料及合約上載明的法定忠告。借款人切勿向任何聲稱可代辦貸款的中介人支付手續費。',
          },
        ],
      },
      disclaimerContent: {
        title: '免責聲明 (Legal Disclaimer)',
        paragraphs: [
          '1. 本網站（包括所有文字、圖片、貸款計算機及相關資訊）由盈滙亞洲有限公司（Granton Asia Limited，下稱「本公司」）提供，僅供一般參考及資訊交流之用，並不構成任何要約、招攬或具法律約束力之信貸承諾。',
          '2. 本網站所載之貸款計算機運算結果、預計每月還款金額及參考利率僅為估算示例。最終批出之貸款金額、實際年利率（APR）及還款期數，均須視乎申請人所提交之真實證明文件、財務背景及本公司內部信貸審批結果而定。本公司保留對貸款申請之最終批核及修改權利，毋須預先通知。',
          '3. 本公司已竭力確保本網站所提供的資料準確及最新，但並不對該等資料的準確性、完整性、及時性或適用性作出任何明示或暗示的保證。因使用或依賴本網站任何內容而導致之任何直接、間接或衍生性損失，本公司概不承擔任何法律責任。',
          '4. 盈滙亞洲有限公司不會向借款人收取任何形式的「中介費」、「顧問費」或「代辦手續費」。任何自稱代表本公司要求繳付中介費用的第三方人士均屬虛假，請立即向本公司或警方舉報。',
        ],
      },
    },
    footer: {
      description: '盈滙亞洲有限公司（Granton Asia Limited）立足香港，專注按揭貸款業務，致力為客戶提供合規、透明、高效之全方位信貸解決方案。',
      licence: '立足香港 · 專注按揭融資服務',
      quickLinks: '快捷導航',
      servicesTitle: '貸款產品',
      legal: '法律與監管聲明',
      aboutUs: '公司簡介',
      loanServices: '貸款服務',
      applicationProcess: '申請流程',
      contactUs: '聯絡我們',
      pics: '個人資料收集聲明 (PICS)',
      mloSummary: '放債人條例條文撮要',
      disclaimer: '免責聲明',
      privacyPolicy: '私隱政策聲明',
      termsOfService: '客戶服務條款',
      allRightsReserved: '盈滙亞洲有限公司 Granton Asia Limited 版權所有 不得轉載。',
      statutoryWarning: '忠告：借錢梗要還，咪俾錢中介',
    },
  },
  en: {
    common: {
      brandName: 'Granton Asia',
      brandFullName: 'Granton Asia Limited',
      brandSubtitle: '盈滙亞洲有限公司 · Licensed Money Lender',
      navAbout: 'About Us',
      navServices: 'Loan Services',
      navProcess: 'Application Process',
      navCalculator: 'Calculator',
      navContact: 'Contact Us',
      navApply: 'Apply Now',
      navEnquiry: 'Enquiry',
      language: 'Language',
      switchLangPrompt: '切換至繁體中文 / Traditional Chinese',
      tradChinese: '繁體中文',
      english: 'English',
    },
    hero: {
      badge: 'Professional Hong Kong Mortgage & Property Financing',
      titlePart1: 'Granton Asia · Empowering Your Future With ',
      titleHighlight: 'Professional Loans',
      titlePart2: '',
      subtitle: 'Granton Asia Limited (盈滙亞洲有限公司) is based in Hong Kong. We are dedicated to providing flexible, transparent, and prompt financial credit solutions for individuals and SMEs. Fast approvals, competitive rates, and zero hidden fees.',
      applyNow: 'Start Online Application',
      calculate: 'Calculate Repayment',
      warning: 'Warning: You have to repay your loans. Don\'t pay any intermediaries.',
      trustTitle: 'Fully Licensed & Secure',
      trustDesc: 'Compliant with Money Lenders Ordinance (Cap. 163)',
    },
    about: {
      badge: 'About Granton Asia',
      heading: 'Mortgage Financing Built Around Your Needs',
      introP1: 'Granton Asia Limited is a Hong Kong-based company specialising in mortgage lending. We aim to provide suitable financing solutions for customers seeking to raise funds against their properties.',
      introP2: 'We recognise that every customer’s circumstances are different. By considering the property, funding requirements and repayment capacity, we help customers understand their mortgage arrangements so that they can make informed financing decisions with a clear understanding of the terms and repayment obligations.',
      section1Title: 'Attentive Service and Clear Communication',
      section1Desc: 'Professionalism, integrity and reliability are at the heart of our service approach. We take the time to understand our customers’ needs and pay close attention to each stage of the process. From initial enquiries and document preparation to application follow-up, we aim to provide clear explanations and practical assistance, helping customers navigate their mortgage applications with greater clarity.',
      section2Title: 'Integrity and Lasting Relationships',
      section2Desc: 'We believe that trust is built through transparent communication and responsible service. We place importance on clearly explaining loan terms, applicable fees and repayment arrangements, and encourage customers to carefully assess their financial circumstances and repayment capacity before choosing a financing solution.',
      conclusion: 'Through a practical and attentive approach, Granton Asia strives to be a trusted partner in our customers’ property financing journey.',
      stats: {
        stat1Number: '99.2%',
        stat1Label: 'Customer Satisfaction',
        stat2Number: '24 Hours',
        stat2Label: 'Expedited Review',
        stat3Number: 'Mortgage',
        stat3Label: 'Property Financing',
        stat4Number: '100%',
        stat4Label: 'Licensed & Compliant',
      },
    },
    services: {
      badge: 'Tailored Financing Solutions',
      heading: 'Loan Services',
      subtitle: 'Granton Asia provides a comprehensive suite of flexible credit facilities tailored to support your personal goals and commercial cash flow requirements.',
      items: [
        {
          id: 'personal',
          title: 'Personal Loan',
          highlight: 'Flexible Cash Flow · No Collateral Required',
          desc: 'Designed for salaried employees and professionals. Simple procedure, zero collateral required, with loan amounts up to HK$1,000,000 and flexible tenors up to 60 months.',
          features: ['Loan amounts up to HK$1,000,000', 'Tenors from 6 to 60 months', 'Competitive Annual Percentage Rates', 'No asset pledge or guarantor required'],
          suitableFor: 'Personal expenses, home improvements, medical, education, or emergency cash',
        },
        {
          id: 'balance_transfer',
          title: 'Balance Transfer / Debt Consolidation',
          highlight: 'Clear Multiple High-Interest Debts · Save up to 90% Interest',
          desc: 'Consolidate multiple high-interest credit cards and personal loans into one structured loan with much lower interest, drastically cutting down monthly repayment burdens.',
          features: ['Consolidate multiple card debts and loans', 'Massive reduction in interest expenses', 'Fixed single monthly installment plan', 'Helps improve your credit score (TU)'],
          suitableFor: 'Borrowers holding multiple credit card balances seeking interest reduction',
        },
        {
          id: 'property',
          title: 'Property Owner Loan',
          highlight: 'Private Housing, HOS, Village Houses · High-Limit Financing',
          desc: 'Customized high-limit loan solutions for property owners. First mortgage, second mortgage, or refinancing options to unlock substantial equity with preferential terms.',
          features: ['Loan amounts up to 80% of property valuation', 'Private buildings, HOS, and village houses accepted', 'Expedited approval with flexible repayment schedules', 'Property remains in your ownership and occupation'],
          suitableFor: 'Property owners requiring substantial funding or business investment liquidity',
        },
        {
          id: 'sme',
          title: 'SME Business Working Capital',
          highlight: 'Business Operating Capital · Seize Growth Opportunities',
          desc: 'Tailored working capital support for local Hong Kong small-and-medium enterprises to manage payroll, inventory, supplier payments, or business expansion smoothly.',
          features: ['Flexible credit limits tailored to company turnover', 'Simplified documentation for rapid credit approval', 'Revolving or fixed repayment options available', 'Dedicated corporate relationship manager'],
          suitableFor: 'Hong Kong registered companies, e-commerce stores, and self-employed businesses',
        },
      ],
    },
    process: {
      badge: '4 Simple Steps',
      heading: 'Application Process',
      subtitle: 'Our streamlined 4-step process ensures transparency, speed, and minimal hassle from application to disbursement.',
      steps: [
        {
          step: '01',
          title: 'Submit Online Application',
          time: '~ 3 minutes',
          desc: 'Fill out the secure online form with your desired loan amount, repayment term, and contact details.',
        },
        {
          step: '02',
          title: 'Rapid Credit Review',
          time: 'Response in 30 mins',
          desc: 'Our loan officers review your documentation and conduct a preliminary credit appraisal to propose optimal terms.',
        },
        {
          step: '03',
          title: 'Confirm Terms & Sign',
          time: 'Comprehensive explanation',
          desc: 'Review contract conditions, APR, and installment schedules clearly before formal agreement signing.',
        },
        {
          step: '04',
          title: 'Same-Day Cash Disbursement',
          time: 'Direct transfer',
          desc: 'Funds are transferred directly into your designated local bank account via FPS or wire transfer.',
        },
      ],
      tipTitle: 'Helpful Tip: Prepare these documents for expedited approval',
      tipDesc: 'HKID copy, proof of residential address within the last 3 months (utility bill or bank statement), and income proof for the last 3 months (payslips or bank statements).',
    },
    calculator: {
      heading: 'Plan Your Repayment',
      subtitle: 'Use Granton Asia\'s interactive loan calculator to estimate your monthly payments. Adjust the loan amount and repayment period to find a plan that fits your budget comfortably.',
      loanAmount: 'Loan Amount',
      repaymentPeriod: 'Repayment Period',
      monthsUnit: 'Months',
      minAmount: 'HK$10,000',
      maxAmount: 'HK$1,000,000',
      minMonths: '6 Months',
      maxMonths: '60 Months',
      estimatedHeading: 'Estimated Repayment',
      aprNote: 'Based on an Annual Percentage Rate (APR) of 4.5%',
      monthlyPayment: 'Monthly Payment',
      totalAmount: 'Total Loan Amount',
      totalInterest: 'Total Interest',
      totalRepayment: 'Total Repayment Amount',
      applyCta: 'Apply With These Details',
    },
    form: {
      heading: 'Apply For a Loan',
      subtitle: 'Take the first step towards your financial goals. Fill out our secure form below, and our loan specialist will process your application promptly.',
      personalDetails: 'Personal Details',
      fullName: 'Full Name (as per HKID)',
      fullNamePlaceholder: 'e.g. Chan Tai Man',
      hkid: 'HKID Number',
      hkidPlaceholder: 'e.g. A123456(7)',
      phone: 'Phone Number',
      phonePlaceholder: '+852 1234 5678',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      loanRequirements: 'Loan Requirements',
      loanAmount: 'Desired Loan Amount (HKD)',
      loanAmountPlaceholder: '100000',
      loanPurpose: 'Purpose of Loan',
      selectPurpose: 'Select purpose...',
      purposeOptions: {
        debtConsolidation: 'Debt Consolidation / Card Repayment',
        homeRenovation: 'Home Renovation & Furniture',
        business: 'Business / SME Working Capital',
        education: 'Education & Professional Training',
        medical: 'Medical & Emergency Expenses',
        other: 'Other Personal Use',
      },
      employmentStatus: 'Employment Status',
      selectEmployment: 'Select status...',
      employmentOptions: {
        fullTime: 'Full-Time Employed',
        partTime: 'Part-Time Employed',
        selfEmployed: 'Self-Employed / Business Owner',
        unemployed: 'Freelancer / Other',
      },
      termsAgreePrefix: 'I confirm that I have read and agree to the ',
      termsLink: 'Terms of Service',
      termsAnd: ', ',
      privacyLink: 'Privacy Policy',
      picsLink: 'Personal Information Collection Statement',
      termsAgreeSuffix: '. I consent to Granton Asia Limited verifying my information with credit reference agencies.',
      submit: 'Submit Application',
      submitting: 'Processing securely...',
      successTitle: 'Application Submitted Successfully',
      successDesc: 'Thank you for choosing Granton Asia Limited. Your application has been received. One of our loan specialists will contact you within 24 hours.',
      submitAnother: 'Submit Another Application',
    },
    contact: {
      badge: 'Customer Service & Contact Channels',
      heading: 'Contact Us',
      subtitle: 'For inquiries regarding loan products, application progress, or repayment calculations, feel free to reach out via phone, email, WhatsApp, or visit our office.',
      companyName: 'Granton Asia Limited (盈滙亞洲有限公司)',
      licenceNo: 'Hong Kong Mortgage & Property Financing Specialist',
      addressLabel: 'Address',
      addressValue: 'Unit C2, 22/F, T G Place, 10 Shing Yip Street, Kwun Tong, Kowloon, Hong Kong',
      phoneLabel: 'Tel',
      phoneValue: '+852 3996 8798',
      emailLabel: 'Email',
      emailValue: 'sales@grantonasia.com.hk',
      hoursLabel: 'Business Hours',
      hoursValue: 'Mon - Fri: 09:30 - 18:30 | Sat: 09:30 - 13:00 (Closed on Sundays & Public Holidays)',
      whatsappLabel: 'WhatsApp Hotline',
      whatsappValue: '+852 3996 8798',
      openEnquiryFormBtn: 'Open Online Enquiry Form',
      quickCallBtn: 'Call Customer Hotline',
      whatsappBtn: 'WhatsApp Chat',
      directions: 'Approx. 5 minutes walk from Kwun Tong MTR Station Exit B1/B2.',
    },
    enquiry: {
      badge: 'Customer Support & Loan Advisory',
      heading: 'Customer Enquiry (Direct to Supporter Email)',
      subtitle: 'Have questions regarding loan limits, interest privileges, approval requirements, or early repayment? Submit your enquiry directly to Granton Asia supporter email.',
      supporterTargetLabel: 'Supporter Email Address',
      supporterEmailNote: 'Your enquiry will be routed directly to this designated supporter email for prompt review.',
      name: 'Your Name / Title',
      namePlaceholder: 'e.g. Mr. Chan / Jane Doe',
      email: 'Your Contact Email',
      emailPlaceholder: 'your.email@example.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+852 9876 5432',
      category: 'Enquiry Category',
      selectCategory: 'Select category...',
      categories: {
        eligibility: 'Eligibility & Loan Amount Estimation',
        ratesAndTerms: 'Interest Rates & Repayment Terms',
        applicationStatus: 'Existing Application Status Follow-up',
        documents: 'Required Documents & Verification',
        earlyRepayment: 'Early Settlement & Interest Reduction',
        other: 'Other Consultation',
      },
      subject: 'Enquiry Subject',
      subjectPlaceholder: 'e.g. Inquiry on approval time for HK$200,000 personal loan',
      message: 'Detailed Enquiry Message',
      messagePlaceholder: 'Please describe your questions or specific financial requirements in detail...',
      sendToSupporterBtn: 'Send to Supporter Email',
      sending: 'Routing to supporter email...',
      openInEmailAppBtn: 'Open in Mail App (Mailto)',
      copyEmailBtn: 'Copy Formatted Email Text',
      copied: 'Formatted email copied to clipboard!',
      successTitle: 'Enquiry Successfully Sent to Supporter!',
      successDesc: 'Thank you for reaching out. Your enquiry has been recorded and dispatched to Granton Asia support specialist. We will respond within 24 hours.',
      ticketLabel: 'Enquiry Ref #',
      dispatchedToLabel: 'Dispatched to Supporter',
      timeLabel: 'Submission Time',
      viewHistoryTab: 'Past Enquiries',
      newEnquiryTab: 'New Enquiry',
      noHistoryText: 'No past enquiries sent yet.',
      closeBtn: 'Done & Close',
      floatingButtonLabel: 'Enquiry',
      floatingBadge: 'Online',
      directContactCardTitle: 'Need Immediate Support?',
      directContactCardDesc: 'Granton Asia\'s experienced loan advisors are ready to assist you. Send an online enquiry or email our supporter directly.',
      emailSupporterDirectly: 'Email Supporter Directly',
      responseTimeNote: 'Average response: under 2 hours (guaranteed within 24 hours)',
    },
    legal: {
      tabs: {
        pics: 'PICS Statement',
        mloSummary: 'Money Lenders Ordinance Summary',
        disclaimer: 'Disclaimer',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      picsContent: {
        title: 'Personal Information Collection Statement (PICS)',
        sections: [
          {
            title: '1. Purpose of Collection',
            body: 'Granton Asia Limited ("the Company") collects your personal data when you apply for loans, make inquiries, or utilize our financial services. Such data will be used for: (a) evaluating your loan application and financial creditworthiness; (b) verifying identity and preventing fraud; (c) approving and administering loan accounts; (d) complying with legal and regulatory disclosure obligations under the Money Lenders Ordinance and anti-money laundering guidelines; and (e) debt recovery in the event of default.',
          },
          {
            title: '2. Classes of Transferees',
            body: 'Personal data held by the Company will be kept confidential, but may be disclosed to: (a) Credit Reference Agencies (CRAs) for credit checking; (b) debt collection agencies or legal counsels for outstanding balances; (c) professional advisors, auditors, and IT service providers; and (d) governmental, statutory, or law enforcement bodies pursuant to applicable laws in Hong Kong.',
          },
          {
            title: '3. Rights of Access and Correction',
            body: 'Under the Personal Data (Privacy) Ordinance (Cap. 486), you have the right to ascertain whether the Company holds your personal data, request a copy, and require the correction of any inaccurate information. Requests should be made in writing to our Data Protection Officer (email: sales@grantonasia.com.hk or via mail to Unit C2, 22/F, T G Place, 10 Shing Yip Street, Kwun Tong, Kowloon, Hong Kong).',
          },
          {
            title: '4. Data Retention',
            body: 'Your personal data will be retained for the period necessary to fulfill the purposes of collection, or for statutory limitation periods (generally at least 7 years following account closure), after which data will be securely disposed of or anonymized.',
          },
        ],
      },
      mloContent: {
        title: 'Summary of Provisions of the Money Lenders Ordinance (Cap. 163)',
        preamble: 'This summary is published pursuant to Section 18 and Schedule 4 of the Money Lenders Ordinance (Cap. 163 of the Laws of Hong Kong) to inform borrowers of their primary statutory rights and legal protections:',
        provisions: [
          {
            section: 'Section 18',
            title: 'Form and Content of Money Lending Agreements',
            content: 'A money lending agreement must be made in writing and signed personally by the borrower at the time of agreement. The note or memorandum must state all key terms, including principal sum, effective APR, installment schedule, and collateral details. A copy must be provided to the borrower within 7 days of signing. Failure to comply makes the agreement unenforceable.',
          },
          {
            section: 'Section 19',
            title: 'Duty to Supply Statement of Account',
            content: 'The borrower is entitled at any time, upon written request and reasonable payment, to receive from the money lender a statement showing amounts paid, outstanding balance, and interest accrued.',
          },
          {
            section: 'Section 21',
            title: 'Prohibition on Compound Interest & Excessive Charges',
            content: 'Any clause requiring compound interest or increased interest rates upon default is void and unenforceable. Money lenders are strictly prohibited from demanding ancillary negotiation or brokerage fees from borrowers.',
          },
          {
            section: 'Sections 24 & 25',
            title: 'Statutory Maximum Interest Rate Ceilings',
            content: 'Under Section 24, the effective annual percentage rate (APR) of any loan agreement must not exceed the statutory ceiling of 48% per annum (as amended effective December 30, 2022). If an effective rate exceeds 36% p.a., it is presumed extortionate, and a court may reopen and alter the transaction.',
          },
          {
            section: 'Statutory Warning',
            title: 'Mandatory Money Lender Warning',
            content: '"Warning: You have to repay your loans. Don\'t pay any intermediaries." — This warning is required by statutory money lender licensing conditions to be prominently shown on all promotional materials and loan agreements.',
          },
        ],
      },
      disclaimerContent: {
        title: 'Legal Disclaimer',
        paragraphs: [
          '1. This website, including all content, calculators, and materials, is operated by Granton Asia Limited ("the Company") for general informational purposes only and does not constitute a legally binding offer or solicitation to lend.',
          '2. The monthly payments, interest amounts, and calculations produced by our online calculator are indicative estimates only. Final approval, credit limits, APR, and repayment tenors are subject to formal verification of submitted proof and internal credit assessment. The Company reserves the final right to approve or decline applications.',
          '3. While reasonable care has been taken to ensure accuracy, the Company disclaims all representations or warranties of any kind regarding accuracy or completeness. The Company is not liable for any direct or indirect loss arising from reliance on the site.',
          '4. Granton Asia Limited does not charge borrowers any intermediary fees, consultation fees, or agency commissions. Beware of third parties fraudulently claiming to represent our company.',
        ],
      },
    },
    footer: {
      description: 'Granton Asia Limited (盈滙亞洲有限公司) is based in Hong Kong, specialising in mortgage lending and providing compliant, transparent, and prompt financing solutions for individuals and SMEs.',
      licence: 'Hong Kong Mortgage Financing Specialist',
      quickLinks: 'Quick Links',
      servicesTitle: 'Loan Products',
      legal: 'Legal & Regulatory',
      aboutUs: 'About Us',
      loanServices: 'Loan Services',
      applicationProcess: 'Application Process',
      contactUs: 'Contact Us',
      pics: 'PICS Statement',
      mloSummary: 'Money Lenders Ordinance Summary',
      disclaimer: 'Disclaimer',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      allRightsReserved: 'Granton Asia Limited (盈滙亞洲有限公司). All rights reserved.',
      statutoryWarning: 'Warning: You have to repay your loans. Don\'t pay any intermediaries.',
    },
  },
};
