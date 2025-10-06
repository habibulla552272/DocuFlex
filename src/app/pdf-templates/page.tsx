import Image from "next/image";
import Link from "next/link";
import React from "react";

const items = [
  { title: "Resume", href: "#", url: "/resume.png" },
  { title: "Invoice Template", href: "#", url: "/invoice.png" },
  { title: "Receipt Template", href: "#", url: "/recive.png" },
  { title: "Certificate of Achievement", href: "#", url: "/resume.png" },
  { title: "Personal ID Card Template", href: "#", url: "/card.jpeg" },
  { title: "Daily Task Planner", href: "#", url: "/dailytask.jpeg" },
  { title: "Quotation Template", href: "#", url: "/quotation.jpeg" },
  { title: "Meeting Notes Template", href: "#", url: "/meetingnotes.png" },
  { title: "Rental Agreement Template", href: "#", url: "/rentalagreement.png" },
  { title: "Event Invitation Template", href: "#", url: "/eventinvitation.jpeg" },
];

const Page = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative overflow-hidden group bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center hover:-translate-y-1 duration-200"
            >
           
              <Image
                src={item.url}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="absolute -bottom-14 py-2 group-hover:bottom-0 w-full h-ull bg-amber-300 text-white  text-lg font-semibo">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
