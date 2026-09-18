import React from 'react';
import { motion } from 'framer-motion';

// Certificate PDF files
import cert1 from '../assets/certificates/ai cer1.pdf';
import cert2 from '../assets/certificates/cer2.pdf';
import cert3 from '../assets/certificates/cer3.pdf';
import cert4 from '../assets/certificates/cer4.pdf';
import cert5 from '../assets/certificates/cer5.pdf';
import cert6 from '../assets/certificates/cer6.pdf';
import cert7 from '../assets/certificates/cer7.pdf';
import cert8 from '../assets/certificates/cer8.pdf';
import cert9 from '../assets/certificates/cer9.pdf';
import cert10 from '../assets/certificates/cer10.pdf';

const certData = [
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM (Coursera)',
    date: 'Aug 2024',
    file: cert1,
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google (Coursera)',
    date: 'Aug 2024',
    file: cert2,
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'Duke University (Coursera)',
    date: 'Aug 2024',
    file: cert3,
  },
  {
    title: 'Explore Machine Learning using Python',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    file: cert4,
  },
  {
    title: 'Foundations of Data Science',
    issuer: 'Google (Coursera)',
    date: 'July 2024',
    file: cert5,
  },
  {
    title: 'Associate in IT Foundation Skills (Python)',
    issuer: 'Infosys Springboard',
    date: 'July 2024',
    file: cert6,
  },
  {
    title: 'Machine Learning Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    file: cert7,
  },
  {
    title: 'R Programming',
    issuer: 'Johns Hopkins University (Coursera)',
    date: 'July 2024',
    file: cert8,
  },
  {
    title: 'TechA Web Development using HTML and CSS',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    file: cert9,
  },
  {
    title: 'Data Mining',
    issuer: 'NPTEL',
    date: 'March 2024',
    file: cert10,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-white py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Section Heading */}
        <div className="mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full mb-3">
            Certifications
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Certificates
          </h2>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

          {certData.map((cert, idx) => (
            <motion.a
              key={idx}

              // Open certificate PDF
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"

              // Animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
              }}

              // Card design
              className="
                bg-white
                border border-black/5
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                hover:shadow-red-500/5
                hover:-translate-y-1
                transition-all
                duration-500
                flex
                items-center
                justify-between
                cursor-pointer
              "
            >

              {/* Certificate Details */}
              <div>
                <h3 className="text-lg font-bold text-black mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-black/60">
                  {cert.issuer}
                </p>
              </div>

              {/* Date */}
              <span className="text-xs text-black/40 whitespace-nowrap ml-4">
                {cert.date}
              </span>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;