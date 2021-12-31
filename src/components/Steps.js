import React from 'react'

export const Steps = () =>  {
    return (
        <>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Tips</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Here are some tips to put your mind at ease during the blood donation process.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                
                <div class="flex-grow">
                  <h2 class="py-3 text-pink-600 text-lg title-font font-medium mb-3">The day before</h2>
                  <p class="leading-relaxed text-center">Have an iron-rich diet such as beans, spinach or meat, poultry.<br/>
                    Have a proper sleep of at least 8 hours.<br />
                    Include more liquids in your diet.</p>
                 
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
               
                <div class="flex-grow">
                  <h2 class="text-pink-600 text-lg title-font font-medium mb-3">On the Donation day</h2>
                  <p class="py-7 leading-relaxed text-center">Do carry your identify identification forms e.g. driver’s license<br/>
                    Drink 2 cups of water before donating blood<br/>
Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation.</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                
                <div class="flex-grow">
                  <h2 class="text-pink-600 text-lg title-font font-medium mb-3">After the Donation
</h2>
                  <p class="py-7 leading-relaxed text-center">Reward yourself with a snack as refreshment immediately.<br/>
                    Drink more liquids over a period of 24 hours<br/>
                    Remove the bandage after few hours<br/>
Don’t do vigorous workout & give your body rest.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
