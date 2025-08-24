export class CreateBookingDto {
  id: number;
  img: string;
  title: string;
  date: number;
  time: number;
  adultPrice: number;
  adultValue: number;
  adultCost: number;
  childPrice: number;
  childValue: number;
  childCost: number;
  infantPrice: number;
  infantValue: number;
  infantCost: number;
  totalPrice: number;
  PaymentMethod: string;
  Status: string;
  userId: string;
}
