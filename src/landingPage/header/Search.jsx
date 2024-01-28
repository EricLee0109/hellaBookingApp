function Search() {
  return (
    <div className="inline-flex h-[15rem] w-[70rem] flex-col items-start justify-start gap-8 rounded-2xl bg-white px-8 pb-8 pt-4 shadow">
      <div className="absolute left-[15rem] top-[33.5rem] h-px w-20 border-4 border-blue-500"></div>
      <div className="flex h-36 w-full flex-col items-start justify-start gap-12">
        <div className="inline-flex items-center justify-start gap-8">
          <div className="flex items-center justify-start gap-2">
            <div className="relative h-6 w-6" />
            <div className="font-popi text-base font-semibold text-neutral-900">
              Tour
            </div>
          </div>
          <div className="absolute left-[22rem] top-[31rem] h-px w-12 origin-top-left rotate-90 border border-slate-200"></div>
          <div className="flex items-center justify-start gap-2">
            <div className="relative h-6 w-16" />
            <div className="font-popi text-base font-semibold text-neutral-900">
              Tour Guide
            </div>
          </div>
        </div>
        <div className="inline-flex h-12 w-full items-center justify-start gap-6">
          <div className="inline-flex h-14 shrink grow basis-0 flex-col items-start justify-start rounded-tl rounded-tr">
            <div className="flex h-14 flex-col items-start justify-start gap-2.5 self-stretch rounded border border-zinc-500 bg-white">
              <div className="inline-flex items-center justify-start self-stretch rounded-tl rounded-tr py-1 pl-4">
                <div className="inline-flex h-10 shrink grow basis-0 flex-col items-start justify-center">
                  <div className="inline-flex items-center justify-start">
                    <div className="font-popi text-base font-normal text-zinc-900">
                      Ho Chi Minh - Ha Noi
                    </div>
                  </div>
                  <div className="absolute left-[16rem] top-[35.3rem] inline-flex items-center justify-start bg-white px-1">
                    <div className="font-popi text-sm font-normal text-neutral-900">
                      From - To
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-12 w-12 flex-col items-center justify-center gap-2.5 p-3">
                  <div className="relative h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex h-14 shrink grow basis-0 flex-col items-start justify-start rounded-tl rounded-tr">
            <div className="flex h-14 flex-col items-start justify-start gap-2.5 self-stretch rounded border border-zinc-500 bg-white">
              <div className="inline-flex w-52 items-center justify-start rounded-tl rounded-tr py-2 pl-4">
                <div className="inline-flex h-10 shrink grow basis-0 flex-col items-start justify-center">
                  <div className="inline-flex items-center justify-start">
                    <div className="font-popi text-base font-normal text-zinc-900">
                      07 Nov 22 - 13 Nov 22
                    </div>
                  </div>
                  <div className="absolute left-[38.5rem] top-[35.3rem] inline-flex items-center justify-start bg-white px-1">
                    <div className="font-popi text-sm font-normal text-zinc-900">
                      Depart- Return
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex h-14 shrink grow basis-0 flex-col items-start justify-start rounded-tl rounded-tr">
            <div className="flex h-14 flex-col items-start justify-start gap-2.5 self-stretch rounded border border-zinc-500 bg-white">
              <div className="inline-flex items-center justify-start self-stretch rounded-tl rounded-tr py-2 pl-4">
                <div className="inline-flex h-10 shrink grow basis-0 flex-col items-start justify-center">
                  <div className="inline-flex items-center justify-start">
                    <div className="font-popi text-base font-normal text-zinc-900">
                      1 Passenger, S-Class
                    </div>
                  </div>
                  <div className="absolute left-[61rem] top-[35.3rem] inline-flex items-center justify-start bg-white px-1">
                    <div className="font-popi text-sm font-normal text-zinc-900">
                      Passenger - Class
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex h-10 w-[64rem] items-center justify-end gap-6">
        <div className="inline-flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex h-12 items-center justify-center gap-1 rounded py-2">
            <div className="relative h-4 w-4" />
            <div className="cursor-pointer font-popi text-sm font-medium text-neutral-900">
              Add Promo Code
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex h-12 cursor-pointer items-center justify-center gap-1 rounded bg-blue-400 px-4 py-2 transition-all hover:bg-blue-600">
            <div className="relative h-4 w-4" />
            <div className="text-md font-popi font-bold text-neutral-900">
              Show Tours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
