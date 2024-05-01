const DashboardPage = () => {
  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="w-full md:w-1/2 px-4">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Quản lý sản phẩm</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae justo blandit dapibus.
          </p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Đến quản lý sản phẩm
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Quản lý đơn hàng</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan turpis vitae justo blandit dapibus.
          </p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Đến quản lý đơn hàng
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
