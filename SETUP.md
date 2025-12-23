# SaaS Starter - Complete Setup Guide

## 🚀 Quick Start (Under 30 minutes)

### Step 1: Set Up Supabase (Database) - 10 minutes

1. Go to https://supabase.com and create free account
2. Click "New Project"
3. Fill in:
   - Name: `my-saas`
   - Database Password: (save this securely)
   - Region: Choose closest to your users
4. Wait 2 minutes for project to initialize
5. Go to Project Settings → API
6. Copy these values:
   - Project URL
   - `anon` `public` key

### Step 2: Set Up Stripe (Payments) - 15 minutes

1. Go to https://stripe.com and create account
2. Click "Developers" → "API Keys"
3. Copy:
   - Publishable key
   - Secret key
4. Create Products:
   - Go to "Products" → "Add Product"
   - Create 3 products:
     - **Basic**: $9/month recurring
     - **Pro**: $29/month recurring
     - **Enterprise**: $99/month recurring
5. Copy each Price ID (starts with `price_`)

### Step 3: Configure Environment Variables - 2 minutes

Create `.env` file in project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Stripe Price IDs
STRIPE_BASIC_PRICE_ID=price_xxxxx
STRIPE_PRO_PRICE_ID=price_xxxxx
STRIPE_ENTERPRISE_PRICE_ID=price_xxxxx
```

### Step 4: Create Database Tables - 3 minutes

In Supabase SQL Editor, run:

```sql
-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  stripe_price_id TEXT,
  status TEXT,
  plan_name TEXT,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own subscriptions
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR ALL
  USING (auth.uid() = user_id);
```

### Step 5: Install & Deploy - 3 minutes

```bash
# Install dependencies
npm install

# Test locally
npm run dev
# Visit http://localhost:3000

# Deploy to Vercel
vercel deploy --prod
```

Add environment variables in Vercel:
1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env` file
3. Redeploy

### Step 6: Set Up Stripe Webhooks - 2 minutes

1. In Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://your-domain.vercel.app/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy webhook signing secret → Add to env as `STRIPE_WEBHOOK_SECRET`

---

## 💰 Pricing Breakdown

### Option 1: FREE Tier (MVP Testing)
**Total: $0/month**
- Vercel Hobby: FREE
- Supabase Free: FREE
- Stripe: Pay per transaction only (2.9% + $0.30)

**Good for:**
- Testing your idea
- First 0-100 users
- Up to 500MB database
- 100GB bandwidth

**Limitations:**
- No custom domain support on free Supabase
- Limited compute resources
- 500MB storage

---

### Option 2: Starter Tier (First Revenue)
**Total: $45/month**
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- Stripe: 2.9% + $0.30 per transaction

**Good for:**
- 100-10,000 users
- 8GB database
- Daily backups
- Custom domain + SSL
- Priority support

**Advantages:**
- 99.9% uptime SLA
- Unlimited bandwidth
- Point-in-time recovery
- Production-ready

---

### Option 3: Growth Tier (Scaling Business)
**Total: $200-500/month**
- Vercel Pro: $20/month
- Supabase Pro + Compute: $100-200/month
- SendGrid (emails): $15-50/month
- Monitoring (Sentry/LogRocket): $25-50/month
- Stripe: 2.9% + $0.30 (or negotiate lower)

**Good for:**
- 10K-100K users
- 32GB+ database
- Dedicated compute
- Advanced monitoring
- Email campaigns

**Advantages:**
- Dedicated resources
- No performance throttling
- Advanced analytics
- Priority support

---

### Option 4: Enterprise Tier (Large Scale)
**Total: $1000+/month**
- Vercel Enterprise: Custom pricing
- Supabase Enterprise: Custom pricing
- Dedicated infrastructure
- Custom SLA agreements
- Negotiated Stripe rates

**Good for:**
- 100K+ users
- Unlimited everything
- 99.99% uptime
- White-glove support
- Compliance needs (SOC2, HIPAA)

---

## 📊 Revenue Projections

### Year 1 Growth Example

**Month 1-3: MVP & First Customers**
- Customers: 10
- MRR: $200
- Costs: $0 (free tier)
- Profit: $200/month

**Month 4-6: Product-Market Fit**
- Customers: 50
- MRR: $1,200
- Costs: $45 (starter tier)
- Profit: $1,155/month

**Month 7-9: Growth Phase**
- Customers: 150
- MRR: $4,000
- Costs: $200 (growth tier)
- Profit: $3,800/month

**Month 10-12: Scaling**
- Customers: 300
- MRR: $8,000
- Costs: $350
- Profit: $7,650/month

**Year 1 Total Profit: ~$50,000**

---

## 🎯 How to Win More Money

### Phase 1: Validation (Months 1-3)
**Goal: First 10 paying customers**

1. **Choose a Niche**
   - Solve a specific problem for a specific audience
   - Examples: Survey tool for HR managers, Analytics for Shopify stores, CRM for real estate agents

2. **Manual Outreach**
   - Reddit communities
   - Twitter/X threads
   - LinkedIn direct messages
   - Facebook groups
   - Cold email (targeted)

3. **Offer Founding Member Discount**
   - 50% off lifetime
   - Get feedback
   - Build testimonials

### Phase 2: Growth (Months 4-9)
**Goal: 100+ customers**

1. **Content Marketing**
   - Blog posts solving customer problems
   - YouTube tutorials
   - Twitter threads
   - Case studies

2. **SEO Optimization**
   - Target long-tail keywords
   - Build backlinks
   - Guest posting

3. **Product-Led Growth**
   - Free trial
   - Freemium tier
   - Referral program

### Phase 3: Scale (Months 10-24)
**Goal: 1000+ customers**

1. **Paid Advertising**
   - Google Ads
   - Facebook/Instagram Ads
   - LinkedIn Ads (B2B)
   - Budget: 20-30% of revenue

2. **Partnerships**
   - Integration partners
   - Affiliate program
   - Resellers

3. **Team Building**
   - Hire support
   - Hire sales
   - Hire marketing

---

## 🔧 Technical Stack Explained

### Frontend
- **Next.js 14**: React framework with server-side rendering
- **TypeScript**: Type safety, fewer bugs
- **Tailwind CSS**: Fast styling

### Backend
- **Supabase**: PostgreSQL database + Auth + Real-time
- **Stripe**: Payment processing
- **Vercel**: Hosting + Edge functions

### Why This Stack?

1. **Fast Development**: Build in weeks, not months
2. **Low Cost**: Start free, scale as you grow
3. **Production Ready**: Used by billion-dollar companies
4. **Easy to Maintain**: Managed services, minimal DevOps
5. **Great DX**: Hot reload, TypeScript, good docs

---

## 🛠️ Customization Ideas

### Add Your Core Features

This is a foundation. Add your unique value:

1. **Survey/Form Builder**
2. **Analytics Dashboard**
3. **Project Management**
4. **CRM Tools**
5. **Content Management**
6. **Booking System**
7. **Marketplace**
8. **Social Features**

### Example: Survey SaaS

```typescript
// Add survey creation page
// app/dashboard/surveys/new/page.tsx

// Add survey response collection
// app/api/surveys/[id]/respond/route.ts

// Add analytics dashboard
// app/dashboard/analytics/page.tsx
```

---

## 📈 Success Metrics to Track

### Financial Metrics
- MRR (Monthly Recurring Revenue)
- Churn Rate
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- LTV:CAC Ratio (should be 3:1 or higher)

### Product Metrics
- Daily Active Users
- Feature usage
- Time to value
- Net Promoter Score (NPS)

### Growth Metrics
- Sign-up conversion rate
- Trial-to-paid conversion
- Viral coefficient
- Organic vs paid traffic

---

## 🆘 Common Issues & Solutions

### Issue: "Stripe webhook not receiving events"
**Solution**:
1. Check webhook URL is correct
2. Verify webhook secret in environment variables
3. Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

### Issue: "Supabase RLS blocking queries"
**Solution**:
1. Check your RLS policies
2. Make sure user is authenticated
3. Test with `supabase.auth.getUser()` first

### Issue: "Environment variables not working on Vercel"
**Solution**:
1. Add all variables in Vercel dashboard
2. Redeploy after adding variables
3. Don't forget `NEXT_PUBLIC_` prefix for client-side variables

---

## 🎓 Learning Resources

### Courses & Tutorials
- Next.js: https://nextjs.org/learn
- Supabase: https://supabase.com/docs/guides/getting-started
- Stripe: https://stripe.com/docs/payments/accept-a-payment

### Communities
- r/SaaS
- r/entrepreneur
- Indie Hackers
- Twitter #buildinpublic

### Tools
- Shipfast (boilerplate): https://shipfa.st
- SaaS metrics calculator: https://baremetrics.com
- Pricing psychology: https://www.priceintelligently.com

---

## 🚀 Next Steps

1. ✅ Complete setup above
2. ✅ Test locally
3. ✅ Deploy to Vercel
4. ✅ Test payment flow
5. ✅ Add your core feature
6. ✅ Get first 3 beta users
7. ✅ Iterate based on feedback
8. ✅ Launch publicly
9. ✅ Grow to $10K MRR
10. ✅ Scale to $100K MRR

**Remember**: Perfect is the enemy of done. Launch fast, learn fast, iterate fast.

---

## 💡 Pro Tips

1. **Start Free**: Don't upgrade infrastructure until you hit limits
2. **Validate First**: Get 10 customers before building more features
3. **Price High**: Easier to discount than to raise prices later
4. **Annual Plans**: Offer 20% discount for yearly (better cash flow)
5. **Build in Public**: Share your journey on Twitter for free marketing
6. **Customer Development**: Talk to users weekly
7. **Focus**: One niche, one feature set, one customer type
8. **Speed**: Ship features weekly, not monthly

Good luck building your SaaS! 🎉
