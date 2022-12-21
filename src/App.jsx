import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Toggle from "./components/Toggle";
import Header from "./components/Header";
import Form from "./components/Form";
import Render from "./Render";
import { IconMenu2, IconChevronRight, IconHeart, IconX } from "@tabler/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [isLight, setIsLight] = useState(false);
  const [open, setOpen] = useState(false);

  const [userName, setUserName] = useState("First Last");
  const [userHandle, setUserHandle] = useState("myHandle");
  const [userTitle, setUserTitle] = useState("I'm a really great person!");
  const [userAvatar, setUserAvatar] = useState("github.com/codestackr.png");
  const [userBorderStyle, setUserBorderStyle] = useState("Square-Rounded");

  const [colorSelected, setColorSelected] = useState({
    name: "slate",
    class: "bg-slate-500",
  });
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setIsLight(true);
      }
    }
  }, []);

  let rounding = "rounded-full";

  let lightBG = "bg-slate-100";
  let lightFG = "text-slate-900";
  let darkBG = "dark:bg-slate-900";
  let darkFG = "dark:text-slate-100";
  let toggleLight = "bg-slate-200";
  let toggleDark = "bg-slate-900";
  let toggleLightFont = "text-slate-900";
  let toggleDarkFont = "text-slate-200";
  let toggleBackgroundLight = "bg-slate-300";
  let toggleBackgroundDark = "bg-slate-600";
  let toggleAccent = "focus:ring-slate-500";

  return (
    <div
      className={classNames(
        "min-w-screen relative flex min-h-screen flex-1 overflow-hidden",
        lightBG,
        lightFG,
        darkBG,
        darkFG
      )}
    >
      <main className="relative flex-1 overflow-y-auto">
        <section
          aria-labelledby="primary-section"
          className="flex h-full w-full min-w-0 flex-1 flex-col lg:order-last"
        >
          <div className="absolute top-6 right-6">
            <Toggle
              colors={{
                toggleLight,
                toggleDark,
                toggleLightFont,
                toggleDarkFont,
                toggleBackgroundLight,
                toggleBackgroundDark,
                toggleAccent,
              }}
              isLight={isLight}
              setIsLight={setIsLight}
              rounding={rounding}
            />
          </div>
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center p-4 sm:px-6 lg:px-8">
            <Header />
            <Form
              {...{
                userName,
                setUserName,
                userHandle,
                setUserHandle,
                userTitle,
                setUserTitle,
                userAvatar,
                setUserAvatar,
                userBorderStyle,
                setUserBorderStyle,
                colorSelected,
                setColorSelected,
                linkList,
                setLinkList,
              }}
            />
          </div>
        </section>
      </main>
      <aside className="hidden w-1/3 min-w-[24rem] overflow-y-auto border-l border-slate-200 bg-white lg:block">
        <Render
          {...{
            userName,
            setUserName,
            userHandle,
            setUserHandle,
            userTitle,
            setUserTitle,
            userAvatar,
            setUserAvatar,
            userBorderStyle,
            setUserBorderStyle,
            colorSelected,
            setColorSelected,
            linkList,
            setLinkList,
          }}
        />
      </aside>
      <div className="place-content absolute top-4 left-4 grid py-4 px-2 lg:hidden">
        <button
          type="button"
          className="rounded-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Close panel</span>

          <IconMenu2 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative block w-screen max-w-xl border-l border-slate-200 lg:hidden">
                    <div className="place-content absolute top-1 left-2 z-10 grid rounded-md py-4 px-2">
                      <button
                        type="button"
                        className="rounded-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>

                        <IconX className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <Render
                      {...{
                        userName,
                        setUserName,
                        userHandle,
                        setUserHandle,
                        userTitle,
                        setUserTitle,
                        userAvatar,
                        setUserAvatar,
                        userBorderStyle,
                        setUserBorderStyle,
                        colorSelected,
                        setColorSelected,
                        linkList,
                        setLinkList,
                      }}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="absolute bottom-8 left-2 flex flex-col items-center justify-center sm:left-8">
        <svg
          viewBox="0 0 3180 1771"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40"
        >
          <rect
            x="293"
            y="707.089"
            width="57.174"
            height="395.82"
            fill="currentColor"
          />
          <rect
            x="364.248"
            y="707.089"
            width="438.041"
            height="52.776"
            fill="currentColor"
          />
          <rect
            x="364.248"
            y="1050.13"
            width="438.041"
            height="52.776"
            fill="currentColor"
          />
          <rect
            x="364.248"
            y="774.818"
            width="438.041"
            height="48.378"
            fill="#FF652F"
          />
          <rect
            x="364.248"
            y="988.562"
            width="438.041"
            height="48.378"
            fill="#FF652F"
          />
          <rect
            x="364.248"
            y="880.37"
            width="438.041"
            height="48.378"
            fill="#FF652F"
          />
          <rect
            x="364.248"
            y="823.196"
            width="57.174"
            height="39.582"
            fill="#FF652F"
          />
          <rect
            x="745.114"
            y="948.979"
            width="57.174"
            height="39.582"
            fill="#FF652F"
          />
          <path
            d="M984.102 1050.48C969.06 1050.48 955.075 1048.24 942.145 1043.76C929.478 1039.27 918.395 1032.8 908.896 1024.36C899.396 1015.65 892.007 1005.1 886.73 992.695C881.452 980.029 878.813 965.779 878.813 949.947C878.813 933.85 881.584 919.6 887.126 907.198C892.931 894.532 900.716 883.845 910.479 875.137C920.243 866.429 931.589 859.832 944.52 855.346C957.714 850.86 971.567 848.617 986.081 848.617C1001.91 848.617 1015.5 851.387 1026.85 856.929C1038.46 862.47 1048.22 869.067 1056.14 876.72L1039.91 897.698C1032 890.837 1023.68 885.428 1014.98 881.47C1006.53 877.511 997.296 875.532 987.268 875.532C976.185 875.532 966.026 877.38 956.79 881.074C947.554 884.504 939.638 889.518 933.041 896.115C926.708 902.712 921.694 910.628 918 919.864C914.305 928.836 912.458 938.864 912.458 949.947C912.458 961.029 914.173 971.057 917.604 980.029C921.298 989.001 926.312 996.785 932.645 1003.38C939.242 1009.72 947.026 1014.73 955.998 1018.42C965.234 1021.85 975.394 1023.57 986.477 1023.57C998.351 1023.57 1009.17 1021.33 1018.93 1016.84C1028.96 1012.09 1037.93 1006.28 1045.85 999.424L1060.49 1020.4C1049.68 1029.9 1037.8 1037.29 1024.87 1042.57C1011.94 1047.85 998.351 1050.48 984.102 1050.48Z"
            fill="#FF652F"
          />
          <path
            d="M1171.57 1050.48C1158.9 1050.48 1146.76 1048.24 1135.15 1043.76C1123.8 1039.27 1113.78 1032.8 1105.07 1024.36C1096.36 1015.65 1089.37 1005.1 1084.09 992.695C1079.08 980.029 1076.57 965.779 1076.57 949.947C1076.57 933.85 1079.08 919.6 1084.09 907.198C1089.37 894.532 1096.36 883.845 1105.07 875.137C1113.78 866.429 1123.8 859.832 1135.15 855.346C1146.76 850.86 1158.9 848.617 1171.57 848.617C1184.23 848.617 1196.24 850.86 1207.59 855.346C1219.2 859.832 1229.36 866.429 1238.06 875.137C1246.77 883.845 1253.63 894.532 1258.65 907.198C1263.92 919.6 1266.56 933.85 1266.56 949.947C1266.56 965.779 1263.92 980.029 1258.65 992.695C1253.63 1005.1 1246.77 1015.65 1238.06 1024.36C1229.36 1032.8 1219.2 1039.27 1207.59 1043.76C1196.24 1048.24 1184.23 1050.48 1171.57 1050.48ZM1171.57 1023.57C1180.8 1023.57 1189.11 1021.85 1196.5 1018.42C1204.15 1014.73 1210.62 1009.72 1215.9 1003.38C1221.44 996.785 1225.66 989.001 1228.56 980.029C1231.47 971.057 1232.92 961.029 1232.92 949.947C1232.92 938.864 1231.47 928.836 1228.56 919.864C1225.66 910.628 1221.44 902.712 1215.9 896.115C1210.62 889.518 1204.15 884.504 1196.5 881.074C1189.11 877.38 1180.8 875.532 1171.57 875.532C1162.33 875.532 1153.89 877.38 1146.23 881.074C1138.84 884.504 1132.38 889.518 1126.84 896.115C1121.56 902.712 1117.47 910.628 1114.57 919.864C1111.66 928.836 1110.21 938.864 1110.21 949.947C1110.21 961.029 1111.66 971.057 1114.57 980.029C1117.47 989.001 1121.56 996.785 1126.84 1003.38C1132.38 1009.72 1138.84 1014.73 1146.23 1018.42C1153.89 1021.85 1162.33 1023.57 1171.57 1023.57Z"
            fill="#FF652F"
          />
          <path
            d="M1365.76 1050.48C1353.09 1050.48 1341.61 1048.24 1331.32 1043.76C1321.29 1039.27 1312.59 1032.8 1305.2 1024.36C1297.81 1015.65 1292.14 1005.1 1288.18 992.695C1284.22 980.293 1282.24 966.043 1282.24 949.947C1282.24 934.378 1284.62 920.392 1289.37 907.99C1294.38 895.323 1300.84 884.636 1308.76 875.928C1316.94 867.22 1326.31 860.491 1336.86 855.741C1347.42 850.992 1358.37 848.617 1369.72 848.617C1381.33 848.617 1391.62 850.86 1400.59 855.346C1409.83 859.568 1418.67 865.637 1427.11 873.553H1428.3L1426.71 837.929V763.911H1459.17V1045.73H1432.26L1429.49 1020.4H1428.3C1420.38 1028.58 1410.88 1035.71 1399.8 1041.78C1388.98 1047.58 1377.63 1050.48 1365.76 1050.48ZM1372.49 1023.17C1391.49 1023.17 1409.56 1013.54 1426.71 994.278V898.49C1418.01 890.31 1409.43 884.504 1400.99 881.074C1392.81 877.643 1384.49 875.928 1376.05 875.928C1367.61 875.928 1359.69 877.775 1352.3 881.47C1345.18 884.9 1338.84 889.914 1333.3 896.511C1328.02 902.844 1323.8 910.496 1320.64 919.468C1317.47 928.44 1315.89 938.468 1315.89 949.551C1315.89 972.772 1320.77 990.848 1330.53 1003.78C1340.56 1016.71 1354.54 1023.17 1372.49 1023.17Z"
            fill="#FF652F"
          />
          <path
            d="M1594.78 1050.48C1580.27 1050.48 1566.68 1048.24 1554.01 1043.76C1541.61 1039.27 1530.66 1032.67 1521.16 1023.96C1511.93 1015.26 1504.54 1004.7 1499 992.299C1493.72 979.633 1491.08 965.252 1491.08 949.155C1491.08 933.586 1493.72 919.6 1499 907.198C1504.54 894.796 1511.79 884.24 1520.77 875.532C1530 866.824 1540.42 860.227 1552.04 855.741C1563.91 850.992 1576.31 848.617 1589.24 848.617C1602.96 848.617 1615.23 850.86 1626.05 855.346C1637.14 859.568 1646.37 865.637 1653.76 873.553C1661.41 881.47 1667.22 890.969 1671.18 902.052C1675.14 913.135 1677.11 925.406 1677.11 938.864C1677.11 942.558 1676.98 946.12 1676.72 949.551C1676.45 952.981 1676.06 956.016 1675.53 958.655H1523.93C1526.04 980.557 1533.96 997.049 1547.68 1008.13C1561.67 1018.95 1578.69 1024.36 1598.74 1024.36C1610.35 1024.36 1620.78 1022.78 1630.01 1019.61C1639.51 1016.18 1648.62 1011.69 1657.32 1006.15L1669.2 1027.53C1659.7 1033.86 1648.75 1039.27 1636.34 1043.76C1624.21 1048.24 1610.35 1050.48 1594.78 1050.48ZM1590.03 874.345C1582.12 874.345 1574.47 875.664 1567.08 878.303C1559.95 880.942 1553.49 884.768 1547.68 889.782C1541.88 894.532 1536.99 900.601 1533.04 907.99C1529.08 915.378 1526.31 923.822 1524.72 933.322H1647.43C1646.11 913.531 1640.3 898.754 1630.01 888.99C1619.98 879.227 1606.66 874.345 1590.03 874.345Z"
            fill="#FF652F"
          />
          <path
            d="M2732.23 1045.73V853.366H2759.15L2761.92 898.886H2763.11C2773.14 883.317 2785.41 871.046 2799.92 862.074C2814.7 853.103 2831.06 848.617 2849 848.617C2856.13 848.617 2862.72 849.276 2868.79 850.596C2874.86 851.651 2880.93 853.63 2887 856.533L2879.48 884.636C2872.62 882.261 2866.81 880.546 2862.06 879.491C2857.58 878.435 2851.51 877.907 2843.86 877.907C2829.34 877.907 2815.36 882.129 2801.9 890.574C2788.7 898.754 2776.3 912.871 2764.69 932.926V1045.73H2732.23Z"
            fill="#FF652F"
          />
          <path
            d="M1790.56 1050.49C1771.56 1050.49 1754.01 1047.06 1737.92 1040.2C1722.08 1033.33 1708.23 1023.97 1696.36 1012.09L1716.15 989.135C1725.91 998.898 1737.26 1006.81 1750.19 1012.88C1763.12 1018.69 1777.1 1021.59 1792.14 1021.59C1810.09 1021.59 1823.94 1017.77 1833.71 1010.11C1843.73 1002.46 1848.75 992.565 1848.75 980.427C1848.75 973.566 1847.56 967.76 1845.18 963.01C1842.81 958.261 1839.51 954.171 1835.29 950.74C1831.07 947.31 1826.05 944.275 1820.25 941.636C1814.71 938.997 1808.64 936.227 1802.04 933.324L1764.83 917.095C1758.24 914.457 1751.64 911.29 1745.04 907.596C1738.44 903.901 1732.38 899.415 1726.83 894.138C1721.56 888.86 1717.2 882.659 1713.77 875.534C1710.34 868.146 1708.63 859.701 1708.63 850.202C1708.63 840.438 1710.74 831.334 1714.96 822.89C1719.18 814.446 1724.99 807.189 1732.38 801.12C1740.03 794.787 1749 789.905 1759.29 786.475C1769.85 783.044 1781.32 781.329 1793.73 781.329C1810.09 781.329 1825.13 784.364 1838.85 790.433C1852.57 796.238 1864.18 803.891 1873.68 813.391L1856.27 834.765C1847.82 827.112 1838.45 821.175 1828.16 816.953C1817.87 812.467 1806 810.224 1792.54 810.224C1777.5 810.224 1765.36 813.654 1756.12 820.515C1746.89 827.112 1742.27 836.348 1742.27 848.223C1742.27 854.556 1743.59 859.965 1746.23 864.451C1749.13 868.673 1752.69 872.5 1756.92 875.93C1761.4 879.097 1766.42 881.867 1771.96 884.242C1777.5 886.617 1783.04 888.992 1788.58 891.367L1825 907.2C1832.91 910.366 1840.3 914.061 1847.16 918.283C1854.29 922.241 1860.36 926.991 1865.37 932.532C1870.65 937.81 1874.74 944.143 1877.64 951.532C1880.81 958.656 1882.39 966.969 1882.39 976.468C1882.39 986.76 1880.28 996.391 1876.06 1005.36C1871.84 1014.34 1865.77 1022.25 1857.85 1029.11C1849.93 1035.71 1840.3 1040.99 1828.96 1044.95C1817.61 1048.64 1804.81 1050.49 1790.56 1050.49Z"
            fill="currentColor"
          />
          <path
            d="M1977.63 1045.74V813.786H1892.13V786.079H2096.37V813.786H2010.88V1045.74H1977.63Z"
            fill="currentColor"
          />
          <path
            d="M2173.01 900.471L2160.74 940.053H2238.32L2226.05 900.471C2221.56 885.958 2217.08 871.576 2212.59 857.327C2208.37 842.813 2204.28 828.036 2200.32 812.995H2198.74C2194.52 828.036 2190.29 842.813 2186.07 857.327C2181.85 871.576 2177.5 885.958 2173.01 900.471ZM2093.85 1045.74L2181.32 786.079H2218.53L2306 1045.74H2271.17L2246.63 966.573H2152.43L2127.49 1045.74H2093.85Z"
            fill="currentColor"
          />
          <path
            d="M2425.78 1050.49C2409.69 1050.49 2394.78 1047.45 2381.06 1041.38C2367.33 1035.31 2355.33 1026.61 2345.04 1015.26C2335.01 1003.65 2327.09 989.53 2321.29 972.906C2315.48 956.018 2312.58 937.018 2312.58 915.908C2312.58 895.061 2315.48 876.326 2321.29 859.701C2327.09 843.077 2335.14 828.959 2345.43 817.349C2355.72 805.738 2367.99 796.898 2382.24 790.829C2396.49 784.496 2412.06 781.329 2428.95 781.329C2444.52 781.329 2458.24 784.496 2470.12 790.829C2482.25 797.162 2492.15 804.551 2499.8 812.995L2481.2 833.973C2474.34 826.848 2466.68 821.175 2458.24 816.953C2449.8 812.467 2440.03 810.224 2428.95 810.224C2416.55 810.224 2405.2 812.731 2394.91 817.745C2384.88 822.494 2376.31 829.487 2369.18 838.723C2362.06 847.695 2356.52 858.646 2352.56 871.576C2348.6 884.506 2346.62 899.02 2346.62 915.116C2346.62 931.477 2348.6 946.254 2352.56 959.448C2356.52 972.378 2362.06 983.461 2369.18 992.697C2376.31 1001.93 2384.88 1009.06 2394.91 1014.07C2405.2 1019.08 2416.55 1021.59 2428.95 1021.59C2440.82 1021.59 2451.38 1019.08 2460.62 1014.07C2470.12 1009.06 2479.09 1001.93 2487.53 992.697L2506.14 1012.88C2495.84 1024.76 2484.23 1033.99 2471.3 1040.59C2458.37 1047.19 2443.2 1050.49 2425.78 1050.49Z"
            fill="currentColor"
          />
          <path
            d="M2531.31 1045.74V786.079H2564.56V916.304H2565.75L2675 786.079H2712.6L2630.27 884.638L2722.1 1045.74H2684.89L2609.29 909.575L2564.56 963.01V1045.74H2531.31Z"
            fill="currentColor"
          />
          <path
            d="M899.129 269.43H921.301V369.686L917.204 376.675V397.16L921.301 406.559V455H899.129V269.43ZM910.456 387.038C913.991 372.899 919.373 360.528 926.603 349.924C933.994 339.32 942.83 331.046 953.113 325.101C963.556 319.156 975.044 316.184 987.576 316.184C1000.91 316.184 1012.72 319.156 1023 325.101C1033.29 331.046 1041.32 339.32 1047.1 349.924C1053.05 360.528 1056.02 372.899 1056.02 387.038C1056.02 401.016 1053.05 413.387 1047.1 424.152C1041.32 434.756 1033.29 443.111 1023 449.216C1012.72 455.161 1000.91 458.133 987.576 458.133C975.044 458.133 963.556 455.161 953.113 449.216C942.83 443.271 933.994 434.997 926.603 424.393C919.373 413.628 913.991 401.177 910.456 387.038ZM1033.37 387.038C1033.37 376.755 1031.2 367.678 1026.86 359.805C1022.68 351.932 1016.82 345.827 1009.27 341.489C1001.88 336.99 993.44 334.741 983.961 334.741C974.321 334.741 965.404 336.99 957.21 341.489C949.177 345.827 942.027 351.932 935.761 359.805C929.495 367.678 924.273 376.755 920.096 387.038C924.273 397.321 929.495 406.398 935.761 414.271C942.027 422.144 949.177 428.329 957.21 432.828C965.404 437.166 974.321 439.335 983.961 439.335C993.44 439.335 1001.88 437.166 1009.27 432.828C1016.82 428.329 1022.68 422.144 1026.86 414.271C1031.2 406.398 1033.37 397.321 1033.37 387.038ZM1198.11 458.133C1185.74 458.133 1175.21 455.643 1166.54 450.662C1158.02 445.521 1151.43 438.13 1146.78 428.49C1142.28 418.85 1140.03 407.282 1140.03 393.786V319.317H1162.2V390.171C1162.2 406.238 1165.81 418.448 1173.04 426.803C1180.27 434.997 1190.8 439.094 1204.62 439.094C1214.42 439.094 1222.93 436.925 1230.16 432.587C1237.39 428.088 1243.01 421.822 1247.03 413.789C1251.05 405.756 1253.06 396.437 1253.06 385.833L1261.73 390.894C1260.77 404.551 1257.39 416.44 1251.61 426.562C1245.99 436.684 1238.6 444.476 1229.44 449.939C1220.28 455.402 1209.84 458.133 1198.11 458.133ZM1260.53 455L1253.06 408.728V319.317H1275.23V412.102L1282.7 455H1260.53ZM1370.43 318.835L1381.51 320.763L1392.6 318.835V455H1370.43V318.835ZM1381.27 298.832C1376.77 298.832 1372.92 297.466 1369.7 294.735C1366.65 291.843 1365.12 288.308 1365.12 284.131C1365.12 279.793 1366.65 276.258 1369.7 273.527C1372.92 270.635 1376.77 269.189 1381.27 269.189C1386.09 269.189 1390.03 270.635 1393.08 273.527C1396.13 276.258 1397.66 279.793 1397.66 284.131C1397.66 288.308 1396.13 291.843 1393.08 294.735C1390.03 297.466 1386.09 298.832 1381.27 298.832ZM1486.4 269.43H1508.57V455H1486.4V269.43ZM1585.26 337.151V326.547L1615.14 321.004L1624.06 284.131H1637.31V319.317H1703.35V337.151H1637.31V406.077C1637.31 418.288 1639.97 426.883 1645.27 431.864C1650.73 436.684 1659.08 439.094 1670.33 439.094C1677.72 439.094 1684.15 438.21 1689.61 436.443C1695.23 434.676 1700.7 432.105 1706 428.731V448.252C1702.14 450.662 1696.44 452.911 1688.89 455C1681.5 457.089 1673.79 458.133 1665.75 458.133C1653.54 458.133 1643.66 456.044 1636.11 451.867C1628.72 447.529 1623.34 441.745 1619.96 434.515C1616.75 427.124 1615.14 418.77 1615.14 409.451V337.151H1585.26ZM1912.21 269.43H1934.39V369.686L1930.29 376.675V397.16L1934.39 406.559V455H1912.21V269.43ZM1923.54 387.038C1927.08 372.899 1932.46 360.528 1939.69 349.924C1947.08 339.32 1955.92 331.046 1966.2 325.101C1976.64 319.156 1988.13 316.184 2000.66 316.184C2014 316.184 2025.81 319.156 2036.09 325.101C2046.37 331.046 2054.4 339.32 2060.19 349.924C2066.13 360.528 2069.11 372.899 2069.11 387.038C2069.11 401.016 2066.13 413.387 2060.19 424.152C2054.4 434.756 2046.37 443.111 2036.09 449.216C2025.81 455.161 2014 458.133 2000.66 458.133C1988.13 458.133 1976.64 455.161 1966.2 449.216C1955.92 443.271 1947.08 434.997 1939.69 424.393C1932.46 413.628 1927.08 401.177 1923.54 387.038ZM2046.45 387.038C2046.45 376.755 2044.28 367.678 2039.94 359.805C2035.77 351.932 2029.9 345.827 2022.35 341.489C2014.96 336.99 2006.53 334.741 1997.05 334.741C1987.41 334.741 1978.49 336.99 1970.3 341.489C1962.26 345.827 1955.11 351.932 1948.85 359.805C1942.58 367.678 1937.36 376.755 1933.18 387.038C1937.36 397.321 1942.58 406.398 1948.85 414.271C1955.11 422.144 1962.26 428.329 1970.3 432.828C1978.49 437.166 1987.41 439.335 1997.05 439.335C2006.53 439.335 2014.96 437.166 2022.35 432.828C2029.9 428.329 2035.77 422.144 2039.94 414.271C2044.28 406.398 2046.45 397.321 2046.45 387.038ZM2175.68 497.898C2168.77 497.898 2162.58 497.014 2157.12 495.247C2151.66 493.48 2146.28 490.909 2140.97 487.535V469.942C2146.28 473.316 2151.42 475.806 2156.4 477.413C2161.38 479.02 2167.08 479.823 2173.51 479.823C2180.42 479.823 2186.36 478.216 2191.34 475.003C2196.32 471.95 2200.5 466.889 2203.87 459.82L2271.6 319.317H2295.21L2220.99 468.014C2217.61 474.923 2213.6 480.546 2208.94 484.884C2204.44 489.383 2199.38 492.676 2193.75 494.765C2188.29 496.854 2182.27 497.898 2175.68 497.898ZM2198.33 450.662L2133.98 319.317H2158.33L2220.74 450.662H2198.33Z"
            fill="currentColor"
          />
          <path
            d="M301.127 1453.55H337.247C338.087 1458.87 340.397 1463.56 344.177 1467.62C348.097 1471.54 353.277 1474.62 359.717 1476.86C366.297 1478.96 373.857 1480.01 382.397 1480.01C394.857 1480.01 404.657 1478.26 411.797 1474.76C419.077 1471.12 422.717 1466.08 422.717 1459.64C422.717 1454.6 420.617 1450.75 416.417 1448.09C412.357 1445.29 404.727 1443.26 393.527 1442L361.817 1438.43C341.377 1436.19 326.537 1431.43 317.297 1424.15C308.197 1416.73 303.647 1406.44 303.647 1393.28C303.647 1382.92 306.657 1374.1 312.677 1366.82C318.837 1359.54 327.447 1354.01 338.507 1350.23C349.567 1346.31 362.587 1344.35 377.567 1344.35C392.127 1344.35 405.077 1346.52 416.417 1350.86C427.757 1355.06 436.787 1361.01 443.507 1368.71C450.227 1376.27 453.867 1385.16 454.427 1395.38H418.307C417.607 1390.76 415.507 1386.77 412.007 1383.41C408.647 1379.91 403.957 1377.25 397.937 1375.43C391.917 1373.47 384.847 1372.49 376.727 1372.49C365.387 1372.49 356.357 1374.17 349.637 1377.53C342.917 1380.89 339.557 1385.65 339.557 1391.81C339.557 1396.57 341.517 1400.28 345.437 1402.94C349.497 1405.46 356.567 1407.35 366.647 1408.61L399.617 1412.6C414.177 1414.14 425.727 1416.66 434.267 1420.16C442.947 1423.52 449.107 1428.07 452.747 1433.81C456.527 1439.55 458.417 1446.83 458.417 1455.65C458.417 1466.15 455.197 1475.39 448.757 1483.37C442.457 1491.21 433.567 1497.3 422.087 1501.64C410.607 1505.98 397.167 1508.15 381.767 1508.15C366.087 1508.15 352.297 1505.91 340.397 1501.43C328.497 1496.81 319.117 1490.44 312.257 1482.32C305.397 1474.06 301.687 1464.47 301.127 1453.55ZM618.698 1347.5C631.158 1347.5 641.938 1349.67 651.038 1354.01C660.138 1358.35 667.068 1364.44 671.828 1372.28C676.728 1380.12 679.178 1389.22 679.178 1399.58C679.178 1409.94 676.728 1419.04 671.828 1426.88C667.068 1434.58 660.138 1440.67 651.038 1445.15C641.938 1449.49 631.158 1451.66 618.698 1451.66H549.188V1422.26H616.808C625.068 1422.26 631.508 1420.23 636.128 1416.17C640.888 1412.11 643.268 1406.58 643.268 1399.58C643.268 1392.44 640.888 1386.91 636.128 1382.99C631.508 1378.93 625.068 1376.9 616.808 1376.9H552.338L568.508 1359.89V1505H532.808V1347.5H618.698ZM834.556 1508.15C816.216 1508.15 800.116 1504.72 786.256 1497.86C772.536 1491 761.826 1481.48 754.126 1469.3C746.426 1456.98 742.576 1442.63 742.576 1426.25C742.576 1409.87 746.426 1395.59 754.126 1383.41C761.826 1371.09 772.536 1361.5 786.256 1354.64C800.116 1347.78 816.216 1344.35 834.556 1344.35C852.896 1344.35 868.926 1347.78 882.646 1354.64C896.506 1361.5 907.286 1371.09 914.986 1383.41C922.686 1395.59 926.536 1409.87 926.536 1426.25C926.536 1442.63 922.686 1456.98 914.986 1469.3C907.286 1481.48 896.506 1491 882.646 1497.86C868.926 1504.72 852.896 1508.15 834.556 1508.15ZM834.556 1476.44C846.036 1476.44 855.906 1474.41 864.166 1470.35C872.566 1466.29 879.006 1460.48 883.486 1452.92C888.106 1445.36 890.416 1436.47 890.416 1426.25C890.416 1416.03 888.106 1407.14 883.486 1399.58C879.006 1392.02 872.566 1386.21 864.166 1382.15C855.906 1378.09 846.036 1376.06 834.556 1376.06C823.216 1376.06 813.346 1378.09 804.946 1382.15C796.546 1386.21 790.036 1392.02 785.416 1399.58C780.936 1407.14 778.696 1416.03 778.696 1426.25C778.696 1436.47 780.936 1445.36 785.416 1452.92C790.036 1460.48 796.546 1466.29 804.946 1470.35C813.346 1474.41 823.216 1476.44 834.556 1476.44ZM1147.47 1481.48L1135.08 1483.37V1347.5H1169.73V1505H1124.58L1023.78 1369.13L1035.96 1367.24V1505H1001.52V1347.5H1047.72L1147.47 1481.48ZM1243.88 1453.55H1280C1280.84 1458.87 1283.15 1463.56 1286.93 1467.62C1290.85 1471.54 1296.03 1474.62 1302.47 1476.86C1309.05 1478.96 1316.61 1480.01 1325.15 1480.01C1337.61 1480.01 1347.41 1478.26 1354.55 1474.76C1361.83 1471.12 1365.47 1466.08 1365.47 1459.64C1365.47 1454.6 1363.37 1450.75 1359.17 1448.09C1355.11 1445.29 1347.48 1443.26 1336.28 1442L1304.57 1438.43C1284.13 1436.19 1269.29 1431.43 1260.05 1424.15C1250.95 1416.73 1246.4 1406.44 1246.4 1393.28C1246.4 1382.92 1249.41 1374.1 1255.43 1366.82C1261.59 1359.54 1270.2 1354.01 1281.26 1350.23C1292.32 1346.31 1305.34 1344.35 1320.32 1344.35C1334.88 1344.35 1347.83 1346.52 1359.17 1350.86C1370.51 1355.06 1379.54 1361.01 1386.26 1368.71C1392.98 1376.27 1396.62 1385.16 1397.18 1395.38H1361.06C1360.36 1390.76 1358.26 1386.77 1354.76 1383.41C1351.4 1379.91 1346.71 1377.25 1340.69 1375.43C1334.67 1373.47 1327.6 1372.49 1319.48 1372.49C1308.14 1372.49 1299.11 1374.17 1292.39 1377.53C1285.67 1380.89 1282.31 1385.65 1282.31 1391.81C1282.31 1396.57 1284.27 1400.28 1288.19 1402.94C1292.25 1405.46 1299.32 1407.35 1309.4 1408.61L1342.37 1412.6C1356.93 1414.14 1368.48 1416.66 1377.02 1420.16C1385.7 1423.52 1391.86 1428.07 1395.5 1433.81C1399.28 1439.55 1401.17 1446.83 1401.17 1455.65C1401.17 1466.15 1397.95 1475.39 1391.51 1483.37C1385.21 1491.21 1376.32 1497.3 1364.84 1501.64C1353.36 1505.98 1339.92 1508.15 1324.52 1508.15C1308.84 1508.15 1295.05 1505.91 1283.15 1501.43C1271.25 1496.81 1261.87 1490.44 1255.01 1482.32C1248.15 1474.06 1244.44 1464.47 1243.88 1453.55ZM1559.77 1508.15C1541.43 1508.15 1525.33 1504.72 1511.47 1497.86C1497.75 1491 1487.04 1481.48 1479.34 1469.3C1471.64 1456.98 1467.79 1442.63 1467.79 1426.25C1467.79 1409.87 1471.64 1395.59 1479.34 1383.41C1487.04 1371.09 1497.75 1361.5 1511.47 1354.64C1525.33 1347.78 1541.43 1344.35 1559.77 1344.35C1578.11 1344.35 1594.14 1347.78 1607.86 1354.64C1621.72 1361.5 1632.5 1371.09 1640.2 1383.41C1647.9 1395.59 1651.75 1409.87 1651.75 1426.25C1651.75 1442.63 1647.9 1456.98 1640.2 1469.3C1632.5 1481.48 1621.72 1491 1607.86 1497.86C1594.14 1504.72 1578.11 1508.15 1559.77 1508.15ZM1559.77 1476.44C1571.25 1476.44 1581.12 1474.41 1589.38 1470.35C1597.78 1466.29 1604.22 1460.48 1608.7 1452.92C1613.32 1445.36 1615.63 1436.47 1615.63 1426.25C1615.63 1416.03 1613.32 1407.14 1608.7 1399.58C1604.22 1392.02 1597.78 1386.21 1589.38 1382.15C1581.12 1378.09 1571.25 1376.06 1559.77 1376.06C1548.43 1376.06 1538.56 1378.09 1530.16 1382.15C1521.76 1386.21 1515.25 1392.02 1510.63 1399.58C1506.15 1407.14 1503.91 1416.03 1503.91 1426.25C1503.91 1436.47 1506.15 1445.36 1510.63 1452.92C1515.25 1460.48 1521.76 1466.29 1530.16 1470.35C1538.56 1474.41 1548.43 1476.44 1559.77 1476.44ZM1751.51 1417.43H1812.2C1820.18 1417.43 1826.48 1415.61 1831.1 1411.97C1835.86 1408.19 1838.24 1403.01 1838.24 1396.43C1838.24 1389.85 1835.86 1384.74 1831.1 1381.1C1826.48 1377.46 1820.18 1375.64 1812.2 1375.64H1746.26L1762.43 1357.37V1505H1726.73V1347.5H1816.4C1827.88 1347.5 1837.96 1349.6 1846.64 1353.8C1855.32 1357.86 1862.11 1363.53 1867.01 1370.81C1871.91 1378.09 1874.36 1386.63 1874.36 1396.43C1874.36 1406.09 1871.91 1414.56 1867.01 1421.84C1862.11 1429.12 1855.32 1434.86 1846.64 1439.06C1837.96 1443.12 1827.88 1445.15 1816.4 1445.15H1751.51V1417.43ZM1778.81 1431.29H1819.55L1878.98 1505H1837.19L1778.81 1431.29ZM2055.58 1347.5H2091.28V1505H2055.58V1347.5ZM2181.58 1347.5H2217.28V1505H2181.58V1347.5ZM2075.11 1409.66H2197.33V1440.95H2075.11V1409.66ZM2430.18 1412.6V1439.9H2317.41V1412.6H2430.18ZM2341.35 1426.25L2330.85 1493.03L2315.31 1475.39H2436.69V1505H2294.94L2307.12 1426.25L2294.94 1347.5H2435.64V1377.11H2315.31L2330.85 1359.47L2341.35 1426.25ZM2539.02 1417.43H2599.71C2607.69 1417.43 2613.99 1415.61 2618.61 1411.97C2623.37 1408.19 2625.75 1403.01 2625.75 1396.43C2625.75 1389.85 2623.37 1384.74 2618.61 1381.1C2613.99 1377.46 2607.69 1375.64 2599.71 1375.64H2533.77L2549.94 1357.37V1505H2514.24V1347.5H2603.91C2615.39 1347.5 2625.47 1349.6 2634.15 1353.8C2642.83 1357.86 2649.62 1363.53 2654.52 1370.81C2659.42 1378.09 2661.87 1386.63 2661.87 1396.43C2661.87 1406.09 2659.42 1414.56 2654.52 1421.84C2649.62 1429.12 2642.83 1434.86 2634.15 1439.06C2625.47 1443.12 2615.39 1445.15 2603.91 1445.15H2539.02V1417.43ZM2566.32 1431.29H2607.06L2666.49 1505H2624.7L2566.32 1431.29ZM2869.16 1412.6V1439.9H2756.39V1412.6H2869.16ZM2780.33 1426.25L2769.83 1493.03L2754.29 1475.39H2875.67V1505H2733.92L2746.1 1426.25L2733.92 1347.5H2874.62V1377.11H2754.29L2769.83 1359.47L2780.33 1426.25Z"
            fill="currentColor"
          />
          <path
            d="M293.357 1531.25H2886.59V1541.75H293.357V1531.25Z"
            fill="currentColor"
          />
        </svg>
        <a
          href="https://github.com/sponsors/codeSTACKr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-slate-900 bg-slate-300 py-2 px-4 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <IconHeart className="mr-2 h-5 w-5 text-red-500" />
            Sponsor
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
