"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Faculty = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'expertise', label: 'Expertise & Teaching' }
  ];

  return (
    <section className="min-h-screen bg-[#232E26] p-4 md:p-8 lg:p-12 font-poiret">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D9EFDE] mb-4 font-font3">
          Our Faculty Mentor
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-[#D9EFDE] max-w-2xl mx-auto font-bold text-balance">
          Meet our distinguished faculty members who guide and inspire the next generation
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-[#D9EFDE] rounded-[26px] p-4 md:p-6 lg:p-8 font-font1">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Image Column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <div className='flex justify-center items-center'>
                  <img
                    src="/deepakSir.png"
                    alt="Dr. Deepak Tripathi"
                    className="object-cover  h-32 w-32 sm:h-40 sm:w-40 md:w-48 md:h-48 lg:h-60 lg:w-60 rounded-3xl border-4 border-[#232E26]"
                    />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#232E26] mb-2">
                    Dr. Deepak Tripathi
                  </h2>
                  <span className="bg-[#232E26] text-[#D9EFDE] px-4 py-1 rounded-full text-base  md:text-xl inline-block font-semibold">
                    Club Mentor
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8">
              {/* Custom Tabs */}
              <div className="flex flex-wrap gap-2 border-b-2 border-[#232E26]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-lg font-bold rounded-t-lg transition-colors
                      ${activeTab === tab.id 
                        ? 'bg-[#232E26] text-[#D9EFDE]' 
                        : 'bg-transparent text-[#232E26] hover:bg-[#232E26]/10'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6 space-y-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-[#232E26] font-semibold">
                      Dr. Deepak Tripathi is an Assistant Professor at the University School of Automation and Robotics (USAR), GGSIPU. With over 13 years of academic and teaching experience, he has established himself as a distinguished educator and researcher.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-[#232E26] p-4 rounded-lg text-center shadow-md">
                        <div className="font-bold text-xl text-[#D9EFDE]">13+</div>
                        <div className="text-[#D9EFDE] font-semibold">Years Experience</div>
                      </div>
                      <div className="bg-[#232E26] p-4 rounded-lg text-center shadow-md">
                        <div className="font-bold text-xl text-[#D9EFDE]">PhD</div>
                        <div className="text-[#D9EFDE] font-semibold">IIT Delhi</div>
                      </div>
                      <div className="bg-[#232E26] p-4 rounded-lg text-center shadow-md">
                        <div className="font-bold text-xl text-[#D9EFDE]">USAR</div>
                        <div className="text-[#D9EFDE] font-semibold">Department</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="space-y-4">
                    <div className="bg-[#232E26] p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg mb-2 text-[#D9EFDE]">Science Film Festival Winner</h3>
                      <p className="text-[#D9EFDE] font-semibold">Winner of Science Film Festival (2022) organized by the Swiss Embassy in Delhi</p>
                    </div>
                    <div className="bg-[#232E26] p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg mb-2 text-[#D9EFDE]">Best Presentation Award</h3>
                      <p className="text-[#D9EFDE] font-semibold">&ldquo;Joint ICTP-IAEA College on Plasma Physics&rdquo; in Italy (2018)</p>
                    </div>
                    <div className="bg-[#232E26] p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg mb-2 text-[#D9EFDE]">Research Grants</h3>
                      <p className="text-[#D9EFDE] font-semibold">Recipient of prestigious travel grants from CSIR and DST, India</p>
                    </div>
                  </div>
                )}

                {activeTab === 'expertise' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl mb-4 text-[#232E26]">Areas of Expertise</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          'Plasma Physics',
                          'Laser-Plasma Interaction',
                          'Terahertz Radiation',
                          'Self-Focusing',
                          'Harmonic Generation',
                          'Medical Physics'
                        ].map((item, index) => (
                          <div key={index} className="bg-[#232E26] p-4 rounded-lg text-center shadow-md">
                            <span className="text-[#D9EFDE] font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="font-bold text-xl mb-4 text-[#232E26]">Teaching</h3>
                      <ul className="list-disc list-inside space-y-2 text-[#232E26] font-semibold">
                        <li>Engineering Physics-I</li>
                        <li>Engineering Physics-II</li>
                        <li>Electromagnetic Theory</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;