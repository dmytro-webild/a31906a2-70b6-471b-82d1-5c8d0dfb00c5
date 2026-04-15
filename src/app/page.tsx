"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="BlackCrest"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Roofing Crafted with Legacy."
      description="BlackCrest Roofing 3rd Generation delivers premium roofing solutions with precision craftsmanship, fair pricing, and unmatched professionalism trusted by dozens of 5‑star homeowners."
      buttons={[
        {
          text: "Get Free Inspection",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:5550102",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg"
      imageAlt="Luxury residential roofing project"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-man_23-2151020305.jpg",
          alt: "Middle aged hispanic business man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-waving-hand-outside_23-2149447136.jpg",
          alt: "Man waving hand outside",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-background-new-house-portrait-first-time-buyer-house-owner-apartment-renter-flat-tenant-landlady-moving-day-buying-own-property-concept_493343-29887.jpg",
          alt: "Happy woman on the background of a new house",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-influencer-taking-selfie-while-enjoying-pastry-coffee-cafe-shopping-mall_662251-2725.jpg",
          alt: "Smiling influencer taking selfie",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg",
          alt: "Smiley father posing with arms crossed",
        },
      ]}
      avatarText="Trusted by 1000+ local homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "3rd Generation Experts",
        },
        {
          type: "text",
          text: "Fair Pricing",
        },
        {
          type: "text",
          text: "24/7 Support",
        },
        {
          type: "text",
          text: "Premium Materials",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Three Generations of Craftsmanship"
      description={[
        "For over 25 years, our family-owned business has built its reputation on precision and trust. We don't just fix roofs; we protect the home that holds your family.",
        "Every project is managed with 3rd-generation expertise, ensuring that permits, materials, and workmanship exceed local standards.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "New Roof Installation",
          descriptions: [
            "High‑quality shingles, tiles, and modern roofing systems installed with precision.",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kpst38",
        },
        {
          id: "s2",
          title: "Roof Repairs & Leak Fixes",
          descriptions: [
            "Fast response repairs that stop leaks and extend your roof’s lifespan.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/construction-design-project-renovation-concept_53876-120336.jpg",
        },
        {
          id: "s3",
          title: "Insurance & Permits",
          descriptions: [
            "We handle permits and provide documentation your insurance company accepts.",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/brutalist-monocolor-mod-haus-logo_1421494-548.jpg",
        },
      ]}
      title="Premium Roofing Services"
      description="From high-end installations to emergency leak repairs, we provide comprehensive solutions for your peace of mind."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "25+",
          description: "Years of Excellence",
        },
        {
          id: "m2",
          value: "1200+",
          description: "Successful Projects",
        },
        {
          id: "m3",
          value: "5.0",
          description: "Average Star Rating",
        },
      ]}
      title="Results You Can Trust"
      description="Our work speaks for itself through numbers that reflect our commitment to excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          imageSrc: "http://img.b2bpic.net/free-photo/country-music-band-singing-outdoors_23-2149498460.jpg",
        },
        {
          id: "t2",
          name: "Michael Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-concept-happy-young-man-searching-home-rent-holding-house-paper-maket-smiling-st_1258-149935.jpg",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-young-woman-posing_23-2148454538.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-woman-holding-diary-backyard_23-2147925277.jpg",
        },
        {
          id: "t5",
          name: "Jessica Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-family-celebrating-birthday-together_23-2150598986.jpg",
        },
      ]}
      cardTitle="What Our Homeowners Say"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How long does a new roof take?",
          content: "Most projects are completed within 48-72 hours depending on roof size and weather conditions.",
        },
        {
          id: "f2",
          title: "Do you work with insurance companies?",
          content: "Yes, we handle all necessary permits and provide comprehensive documentation for insurance claims.",
        },
        {
          id: "f3",
          title: "Are you licensed and insured?",
          content: "Absolutely. We are fully licensed, bonded, and insured for your complete peace of mind.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions about your roof? We've got the answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Protect Your Home with a Roof Built to Last. Book your free roof inspection today."
      buttons={[
        {
          text: "Schedule Inspection",
          href: "#",
        },
        {
          text: "Request Quote",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="BlackCrest Roofing"
      copyrightText="© 2025 BlackCrest Roofing 3rd Generation."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
