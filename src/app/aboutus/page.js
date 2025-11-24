"use client";
import React from "react";
import { motion } from "framer-motion";
const DermactiveSection = ({
  heading = "",
  subheading = "",
  textBlocks = "",
  imageSrc,
  isImageOnRight = true,
}) => {
  const layoutClasses = isImageOnRight
    ? "md:flex-row-reverse md:space-x-reverse"
    : "md:flex-row";

  return (
    <div className="lg:px-15 mx-auto px-3 mt-20 mb-10">
      <div className="mb-10">
        <h1 className="lg:text-6xl text-4xl font-light text-[#666]">
          {heading}
        </h1>
        <p className="lg:text-2xl text-[16px] text-[#777]">{subheading}</p>
        <hr className="w-1/3 md:w-2/4 mt-2 border-gray-300" />
      </div>

      <div className={`flex flex-col ${layoutClasses} md:space-x-10`}>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="md:h-100 h-50 relative overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
                rotateY: 90,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="absolute inset-0 -left-30  bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url('${imageSrc}')`,
              }}
            ></motion.div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="w-full md:w-1/2 space-y-6"
        >
          {textBlocks.map((block, index) => (
            <p
              key={index}
              className="text-[#777] text-[17px] leading-relaxed text-lg"
            >
              <strong className="text-[18px] text-[#222]">{block.title}</strong>
              {block.content}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function AboutUS() {
  const dynamicContentBlocks = [
    {
      id: "intro_what_is",
      heading: "What is Dermactive?",
      subheading: "Feel Better In Your Skin",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/04/1980x963.jpg",
      isImageOnRight: true,
      blocks: [
        {
          title: "Dermactive",
          content:
            " is a cutting-edge dermo-cosmetics brand that understands quality, effectiveness, and safety. Our skin is not just a set of cells and its health reflects our state of mind, mood, and overall health, it is the most sensitive part of our organs.",
        },
        {
          title: "Dermactive",
          content:
            " offers an integrated skin care solutions that are adapted to every skin type and concern.",
        },
        {
          title: "In Dermactive",
          content:
            ", we work closely with dermatologists and clinics. This collaboration and the resulting continuous exchange with experts uncover new findings all the time, and we use these findings in our products and new developments to fulfill the needs of customers and patients.",
        },
      ],
    },

    {
      id: "mission_values",
      heading: "Our Mission & Values",
      subheading: "Responsibility and Comprehensive Care",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/01/Banner-1980x963-2.jpg",
      isImageOnRight: false,
      blocks: [
        {
          title: "Dermactive takes responsibility:",
          content:
            " towards the people who use, recommend or prescribe the skin care products. All product lines meet the international highest standards for quality, effectiveness and skin tolerance.",
        },
        {
          title: "Dermactive supports specialist retailers and physicians",
          content:
            " as a reliable expert partner imparting valuable information.",
        },
        {
          title: "Dermactive Solutions",
          content:
            " whether for a specific dermatological concern or for pleasure care are tailored to adapts to each generation and personalized to fit each member of the family. From infants to adolescents, from adults to the elderly, everyone can find an adapted solution combining efficiency and sensoriality to let everyone Feel better in skin.",
        },
      ],
    },

    {
      id: "acti_clear",
      heading: "ACTI-CLEAR",
      subheading:
        "A specific Range for oily and Acne Prone skin with imperfections",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/06/864x600-Acti-Clear-768x533.jpg",
      isImageOnRight: true,
      blocks: [
        {
          title: "As adult skin prone to acne and imperfections",
          content:
            " is the most challenging dermatological concern among adolescence, Dermactive developed a specific range adapted to this skin type.",
        },
        {
          title: "ACTI-CLEAR",
          content:
            " is a complete range of hygiene and daily care products with global actions dedicated to oily and acne prone skin with imperfections.",
        },
        {
          title: "Formulated with well recognized actives",
          content:
            " with different actions on adult skin combining the effectiveness and tolerance to suit the sensitive skin and offer them effective solutions against their imperfections with exceptional mattifying properties.",
        },
      ],
    },

    {
      id: "acti_white",
      heading: "ACTI-White",
      subheading:
        "The fantasy of having a clear and white skin is not a dream anymore!",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/06/864x600-Acti-White-1-768x533.jpg",
      isImageOnRight: false,
      blocks: [
        {
          title: "Dermactive main objective",
          content:
            " is to prevent and correct these unwanted spots that are often annoying from an aesthetic point of view, it is necessary to act on the pigmentation circuits at the different stages of melanogenesis.",
        },
        {
          title: "ACTI-WHITE",
          content:
            " is a complete range of anti-spot treatments for the face and body that reduce pigment spots and improve the radiance of the complexion.",
        },
        {
          title: "ACTI-WHITE is targeting",
          content:
            " the heart of melanogenesis process by multiple levels of actions to downregulate melanin synthesis and to accelerate epidermal regeneration. Provide adapted solutions to different need and hyperpigmentation concerns. It combines effectiveness and softness to ensure pigmentation is controlled and pleasure is achieved. Wide range of products adapted to different sites of pigmentation whether facial, eye lid or body.",
        },
      ],
    },

    {
      id: "acti_repair",
      heading: "ACTI-REPAIR",
      subheading: "Soothing restorative protective care for the whole family",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/06/864x600-Acti-Repair.jpg",
      isImageOnRight: true,
      blocks: [
        {
          title: "Irritations, redness, post-aesthetic acts",
          content:
            " can lead to the weakening of the skin, making it more sensitive and reactive to external aggressions, with possible skin damage.",
        },
        {
          title: "Dermactive has developed ACTI-REPAIR",
          content:
            ", for all superficial skin damage, incorporating combination of actives that are soothing, re-constructing and moisturizing of the aggressed skin to restore the protective skin barrier and ensure hydration of irritated skin and to maintain skin integrity.",
        },
      ],
    },

    {
      id: "acti_solaire",
      heading: "ACTI-SOLAIRE",
      subheading: "Comprehensive Sun Protection System",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/06/864x600-Acti-Solaire-768x533.jpg",
      isImageOnRight: false,
      blocks: [
        {
          title: "As soon as the sun shines",
          content:
            " you get the inner calling to go outside and catch some rays. Staying in the sun improve the mood but you have to be cautious from sun harmful effect.",
        },
        {
          title: "Dermactive Sun Protection system",
          content:
            " makes Sun Protection a real pleasure. It provides protection against harmful sun rays in order to preserve the sun’s capital, both on the face and on the body. offers different products that are Highly adapted to every skin type, age group and needs in order to make the sun protection an integral part of daily routine especially in sunny days.",
        },
        {
          title: "ACTI-SOLAIRE products",
          content:
            " offer balanced protection against UVA-UVB with rapidly absorbed formula to achieve the best users’ satisfaction.",
        },
      ],
    },

    {
      id: "tricho_act",
      heading: "TRICHO-ACT",
      subheading: "Hair Care for Healthy, Strong Hair",
      imageKey:
        "https://derm-active.com/wp-content/uploads/2023/06/864x600-Tricho-Act-1.jpg",
      isImageOnRight: true,
      blocks: [
        {
          title: "The everyday mission of Dermactive",
          content:
            " is to help everyone enjoy healthy, beautiful, groomed and strong hair.",
        },
        {
          title:
            "Thanks to combination of highly effective well-known ingredients",
          content:
            " and respect for hair structure produces efficient tolerable formulas to care about the hair whatever the need.",
        },
        {
          title: "Tricho-ACT is a specific haircare range",
          content:
            ". Starting from daily hygiene to Anti-hair loss multi-control. In addition to effective hair loss treatment, it also offers maintenance products for whom want strong, healthy hair. With continuous use of Tricho-ACT hair satisfaction will be restored and you will feel more confident in yourself.",
        },
      ],
    },
  ];
  return (
    <div className="py-10">
      {dynamicContentBlocks.map((section) => (
        <DermactiveSection
          key={section.id}
          heading={section.heading}
          subheading={section.subheading}
          textBlocks={section.blocks}
          imageSrc={section.imageKey}
          isImageOnRight={section.isImageOnRight}
        />
      ))}
    </div>
  );
}
