export interface EnquiryRecord {
  id: string;
  supporterEmail: string;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  category: string;
  categoryLabel: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'sent' | 'responded';
}
