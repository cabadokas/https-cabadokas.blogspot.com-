import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm animate-fade-in">
      <h1 className="text-3xl font-bold text-brand-secondary mb-6 border-b pb-4">Privacy Policy for Cabadokas</h1>
      
      <div className="prose prose-pink max-w-none text-gray-700">
        <p className="italic mb-4">At Cabadokas, accessible from https://cabadokas.blogspot.com/ and https://cabadokas.netlify.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy outlines the types of information we collect and how we use it.</p>

        <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">1. Our Commitment to a Global Audience</h3>
        <p>We are committed to empowering women and girls globally. This policy is written to comply with the general requirements for all major advertising and affiliate networks, ensuring a trustworthy experience for our visitors worldwide.</p>

        <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">2. Affiliate Disclosure (CRITICAL SECTION)</h3>
        <p>Cabadokas participates in various affiliate marketing programs. This means we may earn a small commission when you purchase a product through a link on our blog or app, at no additional cost to you.</p>
        <p className="font-bold mt-2">Our affiliate programs include:</p>
        <ul className="list-disc pl-6 space-y-1">
            <li>Amazon Services LLC Associates Program (Global)</li>
            <li>Digistore24 (Global)</li>
            <li>Etsy Affiliate Program (Global)</li>
            <li>Awin Affiliate Network (Major Global/European Network)</li>
            <li>ShareASale Affiliate Network (Major Global Network)</li>
            <li>Other applicable affiliate programs focused on women's beauty, health, wellness, weight loss, and fitness.</li>
        </ul>

        <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">3. Google AdSense & Cookies</h3>
        <p>We use Google AdSense to serve advertisements on our sites. Google uses cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting the Ads Settings.</p>

        <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">4. External Links and Social Media</h3>
        <p>Cabadokas maintains a strong presence across global social media platforms to promote our brand and share affiliate links. Our official pages on platforms include Facebook, Twitter, Instagram, and more. We have no control over the privacy policies or practices of these external sites. When you click a social media icon, you leave our sites, and any data you share is governed by that platform's privacy policy.</p>

        <h3 className="text-xl font-bold text-brand-primary mt-6 mb-2">5. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy or your use of our sites, please contact us directly:</p>
        <p className="font-bold">Email: info@cabadoka.ct.ws / cabadokas@gmail.com</p>
      </div>
    </div>
  );
};