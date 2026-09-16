// Storage padrão do navegador para persistência de sessão.
// Não há integração com ambientes de preview ou editores externos.

export function brokeredPreviewStorage(): Storage | undefined {
  if (typeof window === 'undefined') return undefined;

  return window.localStorage;
}
