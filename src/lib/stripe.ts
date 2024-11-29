import Stripe from 'stripe';

// Garantir que a chave não é undefined
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não está definida no arquivo .env.local');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  appInfo: {
    name: 'Ignite Shop',
  },
});
