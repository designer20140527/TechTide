export default function TokenomicsSection() {
  return (
    <section className="flex justify-center" id="tokenomics">
      <div className="max-w-[1400px] w-full bg-white mx-auto">
        <div className="w-full section-padding py-20">
          <h2 className="text-4xl font-syne font-semibold mb-10">
            Tokenomics
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side - Total Supply and Utility */}
            <div className="w-full lg:w-1/2">
              <div className="mb-10">
                <h3 className="text-2xl font-syne mb-4">Total Supply</h3>
                <p className="text-xl font-semibold text-[#0077cc]">1,000,000,000 $TTD</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-syne mb-4">Utility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#0077cc] rounded-full mt-2 mr-3"></div>
                    <span>Redeem accumulated points into $TTD tokens.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#0077cc] rounded-full mt-2 mr-3"></div>
                    <span>Access premium analytical services and accelerated task matching.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#0077cc] rounded-full mt-2 mr-3"></div>
                    <span>Participate in network governance and decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#0077cc] rounded-full mt-2 mr-3"></div>
                    <span>Stake $TTD for additional incentives.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right side - Allocation */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-syne mb-6">Allocation</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Liquidity Pool</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Node Rewards & Task Mining</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Ecosystem Fund</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Team & Advisors</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Marketing & Growth</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">DAO Treasury Reserve</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[#0077cc] h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 