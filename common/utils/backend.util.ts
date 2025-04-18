import { PROJECTID } from '@/common/constants/projectid.enum';
import { AESEncryption } from '@syurodev/ts-common';

type BackendResponse<T> = {
  status: number;
  message: string;
  data: Uint8Array | T;
  limit?: number;
  total_record?: number;
};

export class BackendUtils {
  static getServerUrl(): string {
    return process.env.SERVER_URL ?? 'http://localhost:3000/api/v1';
  }

  static async get<T>(
    url: string,
    projectId: PROJECTID,
  ): Promise<BackendResponse<T>> {
    console.log(`${this.getServerUrl()}/${url}`);
    const response = await fetch(`${this.getServerUrl()}/${url}`, {
      headers: {
        'Content-Type': 'application/json',
        projectid: projectId.toString(),
      },
      // cache: 'force-cache',
    });

    return await response.json();
  }

  static async post<T>(
    url: string,
    projectId: PROJECTID,
    data: unknown,
  ): Promise<BackendResponse<T>> {
    const response = await fetch(`${this.getServerUrl()}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        projectid: projectId.toString(),
      },
      body: new AESEncryption(process.env.SECRET_KEY ?? '').encrypt(
        data as Record<string, unknown>,
      ),
    });

    return await response.json();
  }
}
