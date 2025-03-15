import React from "react";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold">로그인</h2>
        <div className="mt-4">
          {/* You can add your login form here */}
          <input
            type="text"
            placeholder="아이디"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full p-2 mb-4 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            닫기
          </button>
          <button className="px-4 py-2 bg-[#44361D] text-white rounded">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
