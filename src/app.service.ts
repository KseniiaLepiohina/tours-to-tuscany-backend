import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleService: any;
  jwtService: any;
  async googleAuth(): Promise<{ url: string }> {
    return this.googleService.getOAuth2ClientUrl();
  }

  async getAuthClientData(code: string) {
    // 1. Отримуємо дані від Google
    const googleData = await this.googleService.getAuthClientData(code);

    // 2. Тут зазвичай йде логіка: "Знайти користувача в БД або створити нового"
    // const user = await this.userService.findOrCreate(googleData);

    // 3. Створюємо наш внутрішній токен
    const payload = {
      email: googleData.email,
      sub: googleData.email // або user.id з бази даних
    };

    const apiToken = this.jwtService.sign(payload);

    return {
      ...googleData,
      apiToken, // Цей токен ми віддамо на фронтенд
    };
  }

}
