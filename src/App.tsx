import React from "react";
// Layouts
import DefaultLayout from "./layouts/default";
// Components
import BaseButton from "./components/base/Button";
import BaseSection from "./components/base/Section";
import BaseAccordion from "./components/base/Accordion";
import LandingListXItem from "./components/landing/ListXitem";
import LandingListItem from "./components/landing/ListItem";
import LandingStep from "./components/landing/Step";
import BackToTopButton from "./components/base/BackToTopButton";

function App() {

  const steps = [
    {
      img: "sign-up.png",
      title: "Hubungi Team Kami",
      description:
        "Bergabunglah dengan IASSET dan tentukan preferensi Anda. Team kami siap sedia untuk melayani Anda.",
    },
    {
      img: "fund.png",
      title: "Gunakan IASSET untuk Management Aset Anda",
      description:
        "Nikmati berbagai fitur pada IASSET yang sudah kami rancang hanya untuk Anda.",
    },
    {
      img: "buy-crypto.png",
      title: "Klaim Jadwalkan In House Training Anda!",
      description:
        "Klaim bonus training Anda dan rasakan peningkatan performa entitas Anda!",
    },
  ];

  const accordions = [
    {
      title: "Why should I choose NEFA?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "How secure is NEFA?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "Do I have to buy a whole Bitcoin?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
    {
      title: "How do I actually buy Bitcoin?",
      description:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
    },
  ];

  return (
    <div className="App">
      <DefaultLayout>
        {/* <!-- Hero section --> */}
        <section id="hero" className="w-full pb-20 pt-20">
          <BaseSection>
            <div className="col-span-12 lg:col-span-7 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                className="text-[2rem] sm:text-5xl xl:text-4xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
              >
                Otomatisasi Pengelolaan Aset Perusahaan Anda dengan <br />
                <span className="text-header-gradient">IASSET Management System</span>
              </h1>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="paragraph text-lg hidden sm:block"
              >
                Jangan Biarkan Pengelolaan Aset Secara Manual Merugikan Entitas Anda!
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
              >
                <BaseButton classname="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                  Request Demo
                </BaseButton>
              </div>
            </div>
            <div className="hidden sm:block col-span-12 lg:col-span-5">
              <div className="w-full">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  src={require("./assets/img/hero-image.png")}
                  className="mt-5"
                  alt="hero img 1"
                />
              </div>
            </div>
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-1.png")}
              className="hidden lg:block absolute bottom-12 xl:bottom-2 right-2 xl:right-40 w-6"
              alt="circle1"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-2.png")}
              className="hidden lg:block absolute top-5 sm:top-60 right-60 sm:right-60 xl:right-[35rem] w-6"
              alt="circle2"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-3.png")}
              className="hidden lg:block absolute bottom-65 right-20 w-6"
              alt="circle3"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/star.png")}
              className="hidden lg:block absolute top-15 sm:top-12 right-10 lg:right-0 lg:left-[45rem] w-8"
              alt="star1"
            />
          </BaseSection>
        </section>
        {/* <!-- Credit card section --> */}
        <section className="w-full my-20">
          <BaseSection data-aos="fade-right">
            <div className="col-span-12">
              <p className="paragraph text-center">
                Banyak perusahaan menghadapi sejumlah masalah yang signifikan dalam pengelolaan aset mereka. Salah satu masalah utama adalah
              </p>
            </div>
          </BaseSection>
          <BaseSection data-aos="fade-right">
            <div className="col-span-12 lg:col-span-5">
              <div className="w-full">
                <img
                  src={require("./assets/img/buy-and-trade.webp")}
                  className="w-[100%]"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-6 px-4 sm:px-6 mt-20">
              <h2 className="text-4xl font-semibold">
                Kurangnya Visibilitas&nbsp;
                <span className="text-header-gradient">Aset</span>
              </h2>
              <ul className="space-y-4 sm:space-y-2">
                <LandingListXItem title="Keterbatasan informasi tentang aset tersebar di berbagai platform dan departemen.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Sulitnya proses konsolidasi data aset menjadi pandangan yang menyeluruh.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Kesulitan dalam memantau kinerja dan lokasi aset secara real-time."> </LandingListXItem>
              </ul>
            </div>
          </BaseSection>
        </section>
        {/* <!-- Advanced trading tools section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
          <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-5 sm:hidden">
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/vector1.png`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-7 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
            >
              <h2 className="text-4xl font-semibold">
                Kesulitan dalam &nbsp;
                <span className="text-header-gradient">Pengambilan Keputusan</span>
              </h2>
              <ul className="space-y-4 sm:space-y-2">
                <LandingListXItem title="Tingkat akurasi data yang rendah dan tidak terperinci berdampak sulitnya mengambil keputusan yang strategis.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Keterbatasan dalam monitoring dan pemeliharaan aset.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Minimnya detail informasi yang akurat tentang nilai dan alokasi aset."> </LandingListXItem>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-4 hidden sm:block"
            >
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/vector1.png`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full my-24">
          <div className="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-4">
              <div className="w-full">
                <img
                  src={require("./assets/img/industry-leading-security.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-7 space-y-8 sm:space-y-6 mt-8 xl:px-8"
            >
              <h2 className="text-4xl font-semibold">
                Ketidakpastian dalam
                <span className="text-header-gradient"> Manajemen Inventaris</span>
              </h2>
              <ul className="space-y-8 sm:space-y-4">
                <LandingListXItem title="Proses pencatatan inventaris secara manual sangat berisiko terjadinya kesalahan.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Kesulitan dalam menemukan dan melacak aset saat diperlukan.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Potensi kehilangan aset atau kelebihan stok akibat kurangnya pengelolaan yang efektif.">
                  &nbsp;
                </LandingListXItem>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
          <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-5 sm:hidden">
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/vector1.png`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-7 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
            >
              <h2 className="text-4xl font-semibold">
                Masalah
                <span className="text-header-gradient"> Kepatuhan dan Regulasi</span>
              </h2>
              <ul className="space-y-4 sm:space-y-2">
                <LandingListXItem title="Risiko ketidaksesuaian pengklasifikasian aset tetap dengan standar dan peraturan.">
                  &nbsp;
                </LandingListXItem>
                <LandingListXItem title="Penghitungan penyusutan aset tetap yang tidak sesuai dengan standar dan peraturan.">
                  &nbsp;
                </LandingListXItem>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-4 hidden sm:block"
            >
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/vector1.png`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full my-20">
          <BaseSection data-aos="fade-right">
            <div className="col-span-12">
              <p className="paragraph text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Contoh nyata dari kerugian yang dialami perusahaan karena tidak menggunakan otomatisasi pengelolaan aset
                adalah pada suatu Entitas yang bergerak dibidang sosial dan Pendidikan. dengan jumlah aset tetap yang besar,
                entitas tersebut mengalami hambatan untuk dapat mengetahui lokasi, kondisi, dan jumlah aset yang dimilikinya
                karena keterbatasannya cara mereka dalam melakukan inventarisasi dan manajemen aset tetap yang masih sederhana
                dan manual. Akibatnya, setiap tahun entitas mengalami inefisiensi dana untuk melakukan pengadaan aset maupun
                pemeliharaan aset bahkan banyak juga terjadi kehilangan aset yang tidak diketahui keberadaannya.
              </p>
              <p className="paragraph text-justify mt-5">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Selain itu, entitas pun menjadi tabu dalam mengetahui nilai aset yang sebenarnya, sehingga berdampak pula pada kondisi keuangan dan perpajakan yakni nilai aset menjadi overstated atau bahkan understated dan yang paling berbahaya adalah menimbulkan kerugian yang besar dan mempengaruhi kegiatan operasional entitas.
              </p>
            </div>
          </BaseSection>
        </section>

        {/* <!-- Getting started section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              Memperkenalkan <span className="text-header-gradient"> IASSET</span>
            </h2>
            <div
              data-aos="fade-up"
              className="relative w-full items-center justify-between space-y-12 lg:space-y-16 px-4 xl:px-10 mt-20 sm:mt-8"
            >
              <BaseSection>
                <div className="col-span-12 lg:col-span-6">
                  <div className="w-full">
                    <img
                      data-aos="fade-up"
                      data-aos-once="true"
                      src={require("./assets/img/hero-image.png")}
                      className="lg:mt-5 mt-3 mb-5 lg:mb-3"
                      alt="hero img 1"
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <p className="paragraph text-justify">
                    &nbsp;&nbsp;
                    Aplikasi terpadu yang memberikan pilihan OTOMATISASI PENGELOLAAN ASET terbaik untuk Entitas Anda!
                    Guna menjawab berbagai problematika yang terjadi di entitas dalam hal pengelolaan aset yang tidak kompatible,
                    "iAsset" hadir dengan solusi all-in-one yang didesain khusus untuk memberikan kemudahan, efisiensi, dan transparansi
                    dalam pengelolaan aset Entitas Anda. <br /><br />
                    &nbsp;
                    Dibuat oleh PT. BATS International Group, iAsset mengintegrasikan semua
                    aspek pengelolaan aset dari pengadaan hingga penghapusan dalam satu platform yang mudah digunakan.
                    iAsset dirancang untuk berbagai industri memastikan bahwa setiap aset dapat dikelola, dipantau, dan dilaporkan
                    dengan cara yang paling efisien.
                  </p>
                </div>

              </BaseSection>

            </div>
          </div>
        </section>

        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              Mengapa <span className="text-header-gradient"> IASSET</span>?
            </h2>
            <div
              data-aos="fade-up"
              className="relative w-full items-center justify-between space-y-12 lg:space-y-16 px-4 xl:px-10 mt-20 sm:mt-8"
            >
              <BaseSection>
                <div className="col-span-12">
                  <p className="paragraph text-justify">
                    &nbsp;&nbsp;
                    iAsset hadir dengan mengutamakan kemudahan pengguna (user friendly) yang dapat digunakan oleh staf umum,
                    bagian sarana dan prasarana, bagian keuangan, dan pimpinan entitas yang bertujuan untuk memudahkan
                    jalur komunikasi dan meningkatkan transparansi mengenai aset tetap. Dengan adanya iAsset ini tentunya bertujuan
                    untuk membantu entitas untuk dapat memanage dan mengoptimalkan pemanfaatan aset yang dimiliki yang tidak hanya
                    sebatas pada penggunaan, melainkan juga dikelola secara optimal dan profesional sehingga dapat berkontribusi dalam
                    mendukung kapasitas keuangan Anda. <br /><br />
                    &nbsp;
                    Aplikasi iAsset juga telah mendapatkan sertifikasi dan verifikasi resmi dari Badan Siber dan Sandi Negara (BSSN).
                    Sertifikasi dari BSSN menegaskan bahwa iAsset telah melalui serangkaian pengujian ketat untuk memastikan
                    keamanan data dan kepatuhan terhadap standar keamanan yang ditetapkan oleh pemerintah. Ini menunjukkan
                    komitmen kami untuk melindungi informasi sensitif perusahaan Anda dari ancaman siber yang berkembang pesat. <br /><br />
                    <b className="text-lg">Fitur Unggulan:</b>
                    <ul className="space-y-8 sm:space-y-4 mt-5">
                      <LandingListItem title="Pengajuan pengadaan aset.">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Klasifikasi dan pengelompokkan aset sesuai dengan peraturan perpajakan secara otomatis.">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Pengkodefikasian dan cetak QR-Code aset">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Otomatisasi penghitungan penyusutan berdasarkan perpajakan">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Monitoring aset">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Pemanfaatan aset">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Pelaporan aset">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Penghapusan aset">
                        {''}
                      </LandingListItem>
                      <LandingListItem title="Pelaporan Rencana dan Realisasi Sisa Lebih (khusus Entitas Nirlaba)">
                        {''}
                      </LandingListItem>
                    </ul>
                  </p>
                </div>
              </BaseSection>
            </div>
          </div>
        </section>

        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              Pilih <span className="text-header-gradient"> Preferensi Anda</span>
            </h2>
            <div
              data-aos="fade-up"
              className="relative w-full items-center justify-between space-y-12 lg:space-y-16 px-4 xl:px-10 mt-20 sm:mt-8"
            >
              <BaseSection>
                <div className="col-span-12">
                  <p className="paragraph text-justify">
                    &nbsp;&nbsp;
                    Kami mengerti bahwa setiap bisnis memiliki kebutuhan unik dalam mengelola aset mereka. Itulah mengapa kami dengan bangga
                    menyajikan dua opsi fleksibel untuk Anda yaitu pembelian aplikasi satu kali atau berlangganan, sesuai dengan
                    preferensi dan anggaran Anda. <br /><br />

                    <ul className="space-y-8 sm:space-y-4 mt-5">
                      <LandingListItem title="Pembelian Aplikasi Satu Kali.">
                        Dengan opsi ini, Anda dapat memiliki akses penuh tanpa batas ke semua fitur dan fungsi iAsset
                        serta memiliki kewenangan penuh untuk dapat melakukan pengelolaan  dan penyimpanan data
                        sesuai dengan kebutuhan entitas Anda secara pribadi.
                      </LandingListItem>
                      <LandingListItem title="Berlangganan.">
                        Jika Anda menginginkan akses terus-menerus ke pembaruan fitur terbaru dari kami,
                        dukungan teknis prioritas, dan keamanan data yang terjamin, maka berlangganan
                        iAsset adalah pilihan yang tepat untuk Anda. Dengan berlangganan, Anda mendapatkan
                        akses ke semua keuntungan iAsset secara terus-menerus, update terhadap fitur baru,
                        serta fleksibilitas untuk meningkatkan atau menurunkan paket langganan sesuai dengan
                        kebutuhan Anda.
                      </LandingListItem>
                    </ul>
                  </p>
                </div>
              </BaseSection>
            </div>
          </div>
        </section>

        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              PENAWARAN TERBATAS!
            </h2>
              <BaseSection data-aos="fade-right">
                <div className="col-span-12">
                  <p className="paragraph text-justify mt-5">
                    Jika Anda melakukan pemesanan maupun berlangganan dengan kami sebelum 15 April 2024,
                    Anda akan memperoleh paket inhouse training "Strategi Manajemen Aset dengan iAsset
                    Guna Meningkatkan Produktivitas Entitas Anda" secara GRATIS.
                  </p>
                </div>
              </BaseSection>
            <div
              data-aos="fade-up"
              className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
            >
              {steps.map((step) => {
                return <LandingStep step={step} />;
              })}
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
            </div>
          </div>
        </section>
        
        {/* <!-- FAQ section --> */}
        {/* <section className="w-full my-24">
          <BaseSection>
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6"
            >
              <div className="w-full">
                <img
                  src={require("./assets/img/faq.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
            >
              <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
                Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
                Frequently asked questions
              </h2>

              <ul className="shadow-box">
                {accordions.map((accordion: any) => {
                  return <BaseAccordion accordion={accordion} />;
                })}
              </ul>
            </div>
          </BaseSection>
        </section> */}

        {/* <!-- Partners section --> */}
        {/* <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
            <h3
              data-aos="flip-down"
              className="text-2xl text-neutral-800 font-semibold"
            >
              Trusted Partners Worldwide
            </h3>
            <p data-aos="flip-down" className="paragraph">
              We're partners with countless major organisations around the globe
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center justify-center"
            >
              {[
                "clever.png",
                "diamon-cutts.png",
                "swiss-finance.png",
                "gambio.png",
              ].map((img) => {
                return (
                  <img
                    src={require(`./assets/img/partner/${img}`)}
                    className="sm:w-1/2 lg:w-72 mx-auto"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </section> */}
        <BackToTopButton />
      </DefaultLayout>
    </div>
  );
}

export default App;
