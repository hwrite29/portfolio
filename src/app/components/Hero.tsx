export default function Hero() {
  return (
    <section className="flex justify-start items-start py-6">
      <div className="w-full px-88">
        <div className="flex gap-6 items-start">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <img
              src="/1.jpg"
              alt="프로필 사진"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-900"
            />
          </div>
          {/* Info */}
          <div className="flex-1">
            <div className="text-lg font-bold text-white mb-1">_I AM</div>
            <div className="text-sm text-gray-300 mb-2">
              이름 : 이름<br />
              포지션 : PM, 서비스 기획 / FE Developer
            </div>
            <div className="mb-2">
              <div className="text-base font-semibold text-blue-400 mb-1">_Contact</div>
              <div className="text-sm text-gray-200">Email : leego@naver.com</div>
              <div className="text-sm text-gray-200">Phone : +82-1234-5678</div>
            </div>
            <div>
              <div className="text-base font-semibold text-cyan-300 mb-1">_Channel</div>
              <div className="flex items-center mb-2 gap-2">
                <span className="text-sm text-gray-200 w-14">SNS :</span>
                <input
                  className="flex-1 px-3 py-1 rounded bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none"
                  style={{ border: '2px solid', borderImage: 'linear-gradient(90deg, #ec4899, #6366f1) 1' }}
                  placeholder="SNS를 입력하세요"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-200 w-14">GitHub :</span>
                <input
                  className="flex-1 px-3 py-1 rounded bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none"
                  style={{ border: '2px solid', borderImage: 'linear-gradient(90deg, #38bdf8, #6366f1) 1' }}
                  placeholder="GitHub를 입력하세요"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

