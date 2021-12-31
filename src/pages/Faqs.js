import React from 'react'

export const Faqs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              EasyBD
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">A</span>
            </span>{' '}
            quick QAs about donating!
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Some informations to help you throw your journey of donating.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Why donate blood?
              </p>
              <p className="text-gray-700">
                Blood is the part of life that is given to those who need it by those who have the resource to satisfy the need. The love of fellow human and a desire to share something of oneself is what singles out a blood donor from the others. Emergencies occur every minute. For each patient requiring blood, it is an emergency and the patients could have set back if blood is not available.
                <br />
                <br />
                Your blood donation may be even more special than you realize A single donation from you can help one or more patients. This is possible because whole blood is made up of several useful components. These components perform special functions in your body and in the body of patients who receive your blood.
                <br />
                <br />
                Various blood components are Red Blood Cells, White Blood Cells, Platelets, Plasma and selected Plasma Proteins. Each of these components can be separated from your donated volume of blood and transfused into a specific patient requiring that particular component. Thus, many can benefit from one unit of blood. Every year India requires 40 million units of 250cc blood out of which only a meager 500,000 of blood units are available.
                <br />
                <br />
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Tips on blood donating
              </p>
              <p className="text-gray-700">
                Please have a good meal at least 3 hours before donating blood.
                <br />
                <br />
                Please accept the snacks offered after the donation. It is recommended to have a good meal later.
                <br />
                <br />
                Please avoid smoking on the day before donating. One can smoke 3 hours after donation.
                One is not eligible to donate blood if you have consumed alcohol 48 hours before donation.
                <br />
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Misconception about Donating Blood
              </p>
              <p className="text-gray-700">
                will not feel drained or tired if you continue to drink fluids and have a good meal.
                You can resume your normal activities after donating blood, though you are asked to refrain from exercise or heavy weight lifting for twelve hours after donation.
                Donating blood will not leave you low of blood; in fact you will still have surplus blood after the donation.
                While donating blood you will not feel any pain.
                You will not faint or feel uncomfortable after donating blood. This is a common misconception.
                You will not get AIDS if you donate blood.
Patients are just like donors - most of them have common blood types. Because your blood type is common, the demand for that type is greater than for rare types. So, even if your blood type is common there is still a requirement..
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Who needs blood?
              </p>
              <p className="text-gray-700">
                Under normal circumstances, every two seconds someone needs a blood transfusion.
                <br />
                <br />
                Blood transfusions are used for trauma victims - due to accidents and burns - heart surgery, organ transplants, women with complications during childbirth, newborns and premature babies, and patients receiving treatment for leukemia, cancer or other diseases, such as sickle cell disease and thalassemia.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What blood type is most needed?
              </p>
              <p className="text-gray-700">
                All blood types are needed. Common blood types are needed because there are many patients with them. Less common blood types are needed because there are fewer donors to give them. However, people with O- blood are particularly in demand because they are the "universal donor." It means that people of all blood types can receive O- blood safely, so it is used during life-threatening emergencies or when the matching blood type is in short supply. AB types are universal recipients. This relationship is reversed for plasma products. AB type plasma can be transfused to all patients, while O- types are the universal plasma recipients. Therefore, all types are really needed!
                <br />
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Common Reasons People Can't Donate
              </p>
              <p className="text-gray-700">
                Cold, Flu and Other Types of Illness
                <br/>
                If you don’t feel well on the day of your donation, please call to cancel. We’ll be happy to see you 24 hours after your symptoms pass.
                <br/>
                <br/>
                Information About Medications
                <br />
                Most medications will not disqualify you from being able to donate blood, but may require a waiting period after your final dose.
                <br />
                <br />
                Low Iron
                <br />
                If you were unable to donate due to low iron, you may still be able to donate in the future. The Red Cross recommends taking steps to help increase 

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};