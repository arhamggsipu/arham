import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function OfficeBearers() {
  const teamMembers = [
    {
      name: "Arpan Jain",
      role: "President",
      description:
        "Commander of the revolution, our President, Arpan Jain Like the mighty Oak, he stands tall and grand, With deep roots and a vision planned. A canopy so wide, it shelters the crew, Our leader, so strong, guiding all we do!",
      imgSrc: "/assets/images/Arpan1.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/jainarpan1784._/profilecard/?igsh=dTZ5c2d3N2NkeDN3",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/arpan-jain-1784kpbb",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+917900350168",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Himanshu Raj",
      role: "Vice President",
      description:
        "Master of the Game, our Vice President, Himanshu Raj Flexible and resilient like the Willow, Stands strong, yet calm and mellow. Bending with grace through every storm, A steady hand, a guiding norm.",
      imgSrc: "/assets/images/Himanshu.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/himanshuydv._?igsh=bmR1YmJqYjJxeWRp",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "Linkedin", url: " https://www.linkedin.com/in/himanshu-raj-6739b6162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+918510815857",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Priyanshu Sharma",
      role: "Treasurer",
      description:
        "Keeper of the Finances, our Treasurer, Priyanshu Sharma Like the Walnut, guards the gold,With care and precision, his role is bold. Counts every leaf, ensures zero waste, Correct to a T, efficiency embraced!",
      imgSrc: "/assets/images/Priyanshu.png",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/priyanshu__tanuj/",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/priyanshu-tanuj/",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+918851831657",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Saksham",
      role: "Joint Secretary",
      description:
        "Guardian of the Green, our Joint Secretary, Saksham Mittal Like the sturdy Pine, steadfast and true, Supports the team in all that we do. Quick to act and always aware, A force of balance, beyond compare!",
      imgSrc: "/assets/images/Saksham.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/saksham.mittal.01/",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: " https://www.linkedin.com/in/saksham-mittal-9980182bb/",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+918979111597",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Unnati Jain",
      role: "General Secretary",
      description:
        "Voice of an Angel, our Secretary, Unnati Jain Organized and steady like the Birch, Upto date on her research. With a schedule so firm and plans so clear, A guiding force we all hold dear!",
      imgSrc: "/assets/images/Unnati.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/unnati.jain8/",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/unnati-jain-46657a28b/",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+917827731527",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Gurpreet Singh",
      role: "Operations Lead",
      description:
        "The driving force, our Executive Lead, Gurpreet Singh Satha Like the cedar, devoted and wise, Executes plans with focus in his eyes. A pillar of strength, both bold and keen, Steers the club towards a vision so green!",
      imgSrc: "/assets/images/Gurpreet.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/gurpreet_1212/profilecard/?igsh=cG9zb2M4OTJqb2tr",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/gurpreet-singh-satha-087137263/",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+918279742174",
          icon: <FaWhatsapp />,
        },
      ],
    },
    {
      name: "Akshay Chinta",
      role: "Student Lead",
      description:
        "Advocate of the herd, our student Lead, Chinta Akshay Like the blooming Magnolia, full of grace, Leads with passion and sets the pace. A guiding light for the team, Inspires all to chase the green dream!",
      imgSrc: "/assets/images/Akshay.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/akshay_chinta/profilecard/?igsh=MXJ4bWx4Zm53a2xiNA==",
          icon: <FaInstagram />,
        },
        {
          platform: "Linkedin",
          url: "https://www.linkedin.com/in/akshay-chinta-12189b1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          icon: <FaLinkedin />,
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/+919347786595 ",
          icon: <FaWhatsapp />,
        },
      ],
    },
    // Repeat for other members...
  ];

  return (
    <section className="team-section">
      <div className="team-container font-font1">
        <h2 className="team-title font-font3 font-black ">Meet Our Office Bearers</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="team-img h-28 w-28 object-cover"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description ">{member.description}</p>
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
      </div>
    </section>
  );
}

