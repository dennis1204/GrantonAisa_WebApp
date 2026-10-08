import { EnquiryRecord } from '../types/enquiry';

export const DEFAULT_SUPPORTER_EMAIL = 'sales@grantonasia.com.hk';

const STORAGE_KEY = 'granton_asia_supporter_enquiries';

export function getStoredEnquiries(): EnquiryRecord[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('LocalStorage not available for enquiries:', err);
  }
  return [];
}

export function saveEnquiry(record: EnquiryRecord): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existing = getStoredEnquiries();
      const updated = [record, ...existing];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (err) {
    console.warn('Failed to save enquiry locally:', err);
  }
}

export function generateEnquiryId(): string {
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `GA-HK-${randomPart}`;
}

export function createMailtoLink(record: EnquiryRecord): string {
  const subject = encodeURIComponent(`[盈滙亞洲 Granton Asia 貸款查詢] ${record.id}: ${record.subject || record.categoryLabel}`);
  const bodyText = `親愛的盈滙亞洲信貸專員 / Dear Granton Asia Support Team,

【客戶查詢詳情 / Enquiry Details】
------------------------------------------------
- 查詢編號 / Reference ID: ${record.id}
- 發送時間 / Timestamp: ${new Date(record.timestamp).toLocaleString()}
- 客戶姓名 / Name: ${record.senderName}
- 聯絡電話 / Contact Phone: ${record.senderPhone}
- 聯絡電郵 / Customer Email: ${record.senderEmail}
- 查詢類別 / Category: ${record.categoryLabel}
- 查詢主題 / Subject: ${record.subject || record.categoryLabel}

【詳細內容 / Message】
------------------------------------------------
${record.message}

------------------------------------------------
*此郵件由 盈滙亞洲有限公司（Granton Asia Limited）在線平台發送至專員郵箱 (${record.supporterEmail})*
*This enquiry was dispatched via Granton Asia Limited Platform to (${record.supporterEmail})*`;

  return `mailto:${record.supporterEmail}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

export function formatEnquiryPlainText(record: EnquiryRecord): string {
  return `To: ${record.supporterEmail}
Subject: [盈滙亞洲 Granton Asia 貸款查詢] ${record.id}: ${record.subject || record.categoryLabel}

親愛的盈滙亞洲信貸專員 / Dear Granton Asia Support Team,

【客戶查詢詳情 / Enquiry Details】
- 查詢編號 / Reference ID: ${record.id}
- 發送時間 / Timestamp: ${new Date(record.timestamp).toLocaleString()}
- 客戶姓名 / Name: ${record.senderName}
- 聯絡電話 / Contact Phone: ${record.senderPhone}
- 聯絡電郵 / Customer Email: ${record.senderEmail}
- 查詢類別 / Category: ${record.categoryLabel}
- 查詢主題 / Subject: ${record.subject || record.categoryLabel}

【詳細內容 / Message】
${record.message}

*Dispatched via Granton Asia Limited (盈滙亞洲有限公司) Platform*`;
}
