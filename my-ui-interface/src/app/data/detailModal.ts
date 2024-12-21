export interface detailType {
    id: string;
    doc: string;
    service: string;
    tel: string;
    cost: string;
    time: string;
  }
  
  export const dataDetail: detailType[] = [
    {  id: '6400004|จรูณ ทดสอบ4', doc:'คุณหมอสมมติ ทดสอบ', service: 'บริการ รักษารากฟัน', tel:'095-646-0428',cost:'ประเมินค่าใช้จ่าย 0.00',time:'18:00-18:30' },
    {  id: '6400005|จรูณ ทดสอบ5', doc:'คุณหมอถานไถ จิ้น', service: 'บริการ ผ่าฟันคุด', tel:'090-000-0000',cost:'ประเมินค่าใช้จ่าย 0.00',time:'17:00-18:30' },
    {  id: '6400006|จรูณ ทดสอบ6', doc:'คุณหมอซย่า อวี้จิ่น', service: 'บริการ ขูดหินปูน', tel:'091-111-1111',cost:'ประเมินค่าใช้จ่าย 0.00',time:'16:00-16:30' }
    // Add more data as needed
  ];