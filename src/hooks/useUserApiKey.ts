export type UserApiKeyT = string;

export default function useUserApiKey(): UserApiKeyT {
  return Math.random().toString();
}
