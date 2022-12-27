import React from 'react'
import { useForm } from 'react-hook-form'
import { apiPost } from '../../services/services';

const AddGame = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    let resp = apiPost()
  };

    console.log(watch("example"));
  return (
    <div className="container flex justify-center items-center pt-10 capitalize">
      <div className="bg-white rounded-md w-[100%]">
        <div className="flex items-center justify-center ">

          <div className="mx-auto w-full max-w-[650px] ">
            <form onSubmit={handleSubmit(onSubmit) } className='grid grid-cols-2 grid-flow-row gap-x-5'>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Game Name
                </label>
                <input
                  type="text"
                  name="GameName"
                  id="naGameNameme"
                  placeholder="GameName"
                 className={`
                  w-full rounded-md border ${errors.GameName? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("GameName", { 
                    required: {
                      value: true, 
                      message: "Game Name is required"
                    },
                    minLength: {
                      value: 3,
                      message: "Game Name must be at least 3 characters"
                    },
                    maxLength: {
                      value: 30,
                      message: "Game Name must be at most 20 characters"
                    },
                  

                  })}
                />
                {errors.GameName && <span className="text-red-500 text-sm">{errors.GameName.message}</span>}
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Game Link
                </label>
                <input
                  type="text"
                  name="GameLink"
                  id="GameLink"
                  placeholder="Game Link"
                 className={`
                  w-full rounded-md border ${errors.GameLink ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("GameLink", {
                    required: {
                      value: true,
                      message: "Game Link is required"
                    },
                    minLength: {
                      value: 3,
                      message: "Game Link must be at least 3 characters"
                    },
                    maxLength: {
                      value: 300,
                      message: "Game Link must be at most 300 characters"
                    },
                  
                  })}
                />
                {errors.GameLink && <span className="text-red-500 text-sm italic">{errors.GameLink.message}</span>}
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Realese Year
                </label>
                <input
                  type="text"
                  name="realesYear"
                  id="realesYear"
                  placeholder="ex: 2021"
                 className={`
                  w-full rounded-md border ${errors.realesYear ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("realesYear", {
                    required: {
                      value: true,
                      message: "Realese Year is required"
                    },
                    minLength: {
                      value: 4,
                      message: "Realese Year must be at least 4 characters"
                    },
                    maxLength: {
                      value: 4,
                      message: "Realese Year must be at most 4 characters"
                    },
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "Realese Year must be only numbers"
                    },

                  })}
                />
                {errors.realesYear && <span className="text-red-500 text-sm italic">{errors.realesYear.message}</span>}
              </div>
              <div className="mb-5">

                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Gener
                </label>
                <input
                  type="text"
                  name="Gener"
                  id="Gener"
                  placeholder="Gener"
                 className={`
                  w-full rounded-md border ${errors.Gener ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("Gener", {
                    required: {
                      value: true,
                      message: "Gener is required"
                    },
                    minLength: {
                      value: 3,
                      message: "Gener must be at least 3 characters"
                    },
                    maxLength: {
                      value: 30,
                      message: "Gener must be at most 20 characters"
                    },
                  
                  })}


                />
                {errors.Gener && <span className="text-red-500 text-sm italic">{errors.Gener.message}</span>}

              </div>

              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Devlopers Name
                </label>
                <input
                  type="DevlopersName"
                  name="DevlopersName"
                  id="DevlopersName"
                  placeholder="ex: Savage Entertainment"
                  className={`
                  w-full rounded-md border ${errors.DevlopersName ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  {...register("DevlopersName", { required: {
                    value: true,
                    message: "Devlopers Name is required"
                  },
                  minLength: {
                    value: 2,
                    message: "Devlopers Name must be at least 2 characters"
                  },
                  maxLength: {
                    value: 20,
                    message: "Devlopers Name must be at most 20 characters"
                  },
                 

                 })}
                />
                 {errors.DevlopersName && <p className="text-xs italic text-red-500">{errors.DevlopersName.message}</p>}
              
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  devloper Link
                </label>
                <input
                  type="text"
                  name="devloperLink"
                  id="devloperLink"
                  placeholder="https://en.wikipedia.org/wiki/EA_Games"
                 className={`
                  w-full rounded-md border ${errors.devloperLink ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  

                  {...register("devloperLink", {
                    required: {
                      value: true,
                      message: "devloper Link is required"
                    },
                    minLength: {
                      value: 10,
                      message: "devloper Link must be at least 10 characters"
                    },
                    maxLength: {
                      value: 300,
                      message: "devloper Link must be at most 300 characters"
                    },
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i,   
                      message: "devloper Link must be a valid URL"
                    }
                  })}
                />
                {errors.devloperLink && <span className="text-red-500 text-sm italic">{errors.devloperLink.message}</span>}
              
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  publisher Name
                </label>
                <input
                  type="text"
                  name="publisherName"
                  id="publisherName"
                  placeholder="ex: EA Game"
                 className={`
                  w-full rounded-md border ${errors.publisherName ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("publisherName", {
                    required: {
                      value: true,
                      message: "publisher Name is required"
                    },
                    minLength: {
                      value: 2,
                      message: "publisher Name must be at least 2 characters"
                    },
                    maxLength: {
                      value: 30,
                      message: "publisher Name must be at most 20 characters"
                    },
                  
                  })}

                />
                {errors.publisherName && <span className="text-red-500 text-sm italic">{errors.publisherName.message}</span>}
              
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  publisher link
                </label>
                <input
                  type="text"
                  name="publisherLink"
                  id="publisherLink"
                  placeholder="ex: https://en.wikipedia.org/wiki/EA_Games"
                 className={`
                  w-full rounded-md border ${errors.publisherLink ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("publisherLink", {
                    required: {
                      value: true,
                      message: "publisher Link is required"
                    },
                    minLength: {
                      value: 10,
                      message: "publisher Link must be at least 10 characters"
                    },
                    maxLength: {
                      value: 300,
                      message: "publisher Link must be at most 300 characters"
                    },
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i,
                      message: "publisher Link must be a valid URL"
                    }
                  })}

                />
                {errors.publisherLink && <span className="text-red-500 text-sm italic">{errors.publisherLink.message}</span>}

              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  platform
                </label>
                <input
                  type="text"
                  name="platform"
                  id="platform"
                  placeholder="XBOX"
                 className={`
                  w-full rounded-md border ${errors.platform ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  

                  {...register("platform", {
                    required: {
                      value: true,
                      message: "platform is required"
                    },
                    minLength: {
                      value: 2,
                      message: "platform must be at least 2 characters"
                    },
                    maxLength: {
                      value: 30,
                      message: "platform must be at most 20 characters"
                    },
                    
                  })}

                />
                {errors.platform && <span className="text-red-500 text-sm italic">{errors.platform.message}</span>}
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  platform link
                </label>
                <input
                  type="text"
                  name="platformLink"
                  id="platformLink"
                  placeholder="https://en.wikipedia.org/wiki/Xbox_(console)"
                 className={`
                  w-full rounded-md border ${errors.platformLink ? "border-red-500" : "border-[#e0e0e0]"}  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md focus:border-[#6A64F1]
                  `}
                  
                  {...register("platformLink", {
                    required: {
                      value: true,
                      message: "platform Link is required"
                    },
                    minLength: {
                      value: 10,
                      message: "platform Link must be at least 10 characters"
                    },
                    maxLength: {
                      value: 300,
                      message: "platform Link must be at most 300 characters"
                    },
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i,
                      message: "platform Link must be a valid URL"
                    }
                  })}

                />
                {errors.platformLink && <span className="text-red-500 text-sm italic">{errors.platformLink.message}</span>}

              </div>

              <div>
                <div className="flex"></div>
                <button
                  className="  hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default AddGame