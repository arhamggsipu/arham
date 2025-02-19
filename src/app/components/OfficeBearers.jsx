import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function OfficeBearers() {
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: "Arpan Jain",
      role: "President",
      description:
        "Commander of the revolution, our President, Arpan Jain. Like the mighty Oak, he stands tall and grand, with deep roots and a vision planned.",
      imgSrc: "/obimages/arpan.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/jainarpan1784._/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/arpan-jain-1784kpbb", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+917900350168", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Himanshu Raj",
      role: "Vice President",
      description:
        "Master of the Game, our Vice President, Himanshu Raj. Flexible and resilient like the Willow, he stands strong yet calm and mellow.",
      imgSrc: "/obimages/himanshu.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/himanshuydv._/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/himanshu-raj-6739b6162", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+918510815857", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Priyanshu Sharma",
      role: "Treasurer",
      description:
        "Keeper of the Finances, our Treasurer, Priyanshu Sharma. Like the Walnut, he guards the gold with care and precision.",
      imgSrc: "/obimages/priyanshu.png",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/priyanshu__tanuj/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/priyanshu-tanuj/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+918851831657", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Saksham Mittal",
      role: "Joint Secretary",
      description:
        "Guardian of the Green, our Joint Secretary, Saksham Mittal. Like the sturdy Pine, he is steadfast and true.",
      imgSrc: "/obimages/saksham.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/saksham.mittal.01/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/saksham-mittal-9980182bb/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+918979111597", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Unnati Jain",
      role: "General Secretary",
      description:
        "Voice of an Angel, our Secretary, Unnati Jain. Organized and steady like the Birch, up to date on her research.",
      imgSrc: "/obimages/unnati.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/unnati.jain8/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/unnati-jain-46657a28b/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+917827731527", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Gurpreet Singh",
      role: "Operations Lead",
      description:
        "The driving force, our Executive Lead, Gurpreet Singh Satha. Like the cedar, devoted and wise.",
      imgSrc: "/obimages/gurpreet.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/gurpreet_1212/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/gurpreet-singh-satha-087137263/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+918279742174", icon: <FaWhatsapp /> },
      ],
    },
    {
      name: "Akshay Chinta",
      role: "Student Lead",
      description:
        "Advocate of the herd, our student Lead, Chinta Akshay. Like the blooming Magnolia, full of grace.",
      imgSrc: "/obimages/akshay.jpg",
      socialLinks: [
        { platform: "Instagram", url: "https://www.instagram.com/akshay_chinta/", icon: <FaInstagram /> },
        { platform: "Linkedin", url: "https://www.linkedin.com/in/akshay-chinta-12189b1ba/", icon: <FaLinkedin /> },
        { platform: "WhatsApp", url: "https://wa.me/+919347786595", icon: <FaWhatsapp /> },
      ],
    },
  ];

  // Show first 5 members by default, show all if `showAll` is true
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 5);

  return (
    <section className="team-section">
      <div className="team-container font-font1">
        <h2 className="team-title font-font3 font-black">Meet Our Office Bearers</h2>

        <div className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {displayedMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.imgSrc} alt={member.name} className="team-img h-28 w-28 object-cover" />
              <h3 className="team-name font-font3 text-xl md:text-2xl font-black">{member.name}</h3>
              <p className="team-role text-base sm:text-lg md:text-xl font-semibold">{member.role}</p>
              <p className="team-description md:text-sm text-xs">{member.description}</p>
              <div className="team-social">
                {member.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-[#D9EFDE] text-black font-semibold rounded-lg shadow-md hover:bg-[#b4f6a0d1]"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
