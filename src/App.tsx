import {useState} from 'react';
import { motion, AnimatePresence } from "motion/react";
import './App.css';
import lontar from './assets/lontar.jpeg';
import lontar1 from './assets/lontar1.jpeg';
import lontar2 from './assets/lontar2.jpeg';
import lontar3 from './assets/lontar3.jpeg';
import gamelan from './assets/gamelan.jpeg';
import tari from './assets/tari.jpeg';
import ogoh from './assets/ogoh.jpeg';

const dataBudaya = [
  {id: "1", title: "Lontar", description: "Lontar adalah media tulis tradisional Bali yang terbuat dari daun lontar. Lontar digunakan untuk menulis berbagai teks, termasuk sastra, agama, dan ilmu pengetahuan. Proses pembuatan lontar melibatkan pengeringan dan pengolahan daun lontar menjadi lembaran yang dapat ditulis.", image: lontar},
  {id: "2", title: "Gamelan", description: "Gamelan adalah orkestra musik tradisional Bali yang terdiri dari berbagai instrumen logam dan kayu. Musik gamelan digunakan dalam berbagai upacara keagamaan, perayaan adat, dan pertunjukan seni. Suara gamelan memiliki karakteristik unik yang mencerminkan nilai-nilai budaya Bali.", image: gamelan},
  {id: "3", title: "Tari Tradisional", description: "Tari tradisional Bali adalah bentuk ekspresi seni yang menggambarkan cerita, nilai-nilai budaya, dan spiritualitas masyarakat Bali. Tarian ini sering kali dilakukan dalam upacara keagamaan dan perayaan adat, dengan gerakan yang indah dan kostum yang kaya akan simbolisme.", image: tari},
  {id: "4", title: "Ogoh-Ogoh", description: "Ogoh-ogoh adalah patung besar yang terbuat dari bambu dan kertas, yang digunakan dalam perayaan Nyepi di Bali. Ogoh-ogoh melambangkan roh jahat yang diusir dari desa, dan proses pembuatannya melibatkan kreativitas dan keterampilan seni masyarakat Bali.", image: ogoh},
];

const timeline = [
  { id: "1", title: "Masa Lalu", description: "Masyarakat Bali menggunakan daun lontar sebagai media tulis untuk menyimpan berbagai pengetahuan, mulai dari sastra, sejarah, pengobatan tradisional hingga ajaran keagamaan. Naskah-naskah ini diwariskan dan dirawat dari generasi ke generasi.", image: lontar},
  { id: "2", title: "Tantanga Pelestarian", description: "Naskah lontar dapat mengalami kerusakan seiring waktu sehingga memerlukan perawatan khusus. Selain menjaga bentuk fisiknya, kemampuan membaca aksara dan memahami isi naskah juga perlu diteruskan.", image: lontar1},
  { id: "3", title: "Awal digitalisasi", description: "Naskah mulai didokumentasikan dalam bentuk digital agar isi dan tampilannya dapat disimpan serta diakses dengan lebih mudah. Pada 2021, Dinas Kebudayaan Provinsi Bali memperkenalkan ANTAR GoDrive untuk mengelola data lontar melalui platform digital.", image: lontar2},
  { id: "4", title: "Era Digital", description: "Kini, arsip digital dapat menampilkan gambar naskah asli, alih aksara Latin, dan terjemahan. Contohnya, layanan Lontar Digital Dinas Kebudayaan Kabupaten Badung membantu masyarakat mengakses naskah untuk keperluan belajar dan kegiatan budaya.", image:lontar3}

]

export default function App() {
  const [kartuTerpilih, setKartuTerpilih] = useState(null);
  const [doneAnim1, setDoneAnim1] = useState(false);
  return (
    <div className="bg-bali-sand w-full h-[380vh] z-0">
      <motion.div className="bg-linear-to-r from-bali-gold/40 to-bali-sand-dark/40 p-8 rounded-lg h-[80vh] shadow-xl/20 shadow-red-400 z-2"
        initial={{ opacity: 0, scaleY: 0, transformOrigin: "top"}}
        animate={{ scaleY:[0, 0.3, 0.305, 1], opacity: [0, 1, 1, 1]}}
        transition={{ duration: 3, times: [0, 0.3, 0.6, 1],ease: "easeInOut",}}
        onAnimationComplete={()=> setDoneAnim1(true)}
        >
      </motion.div>
      <div className="absolute top-20 left-0 w-full h-16 flex flex-col justify-center items-center gap-2 z-10">
        <motion.h1
        initial={{ opacity: 0, scaleY: 0, transformOrigin: "top"}}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.5, delay:0.5, ease: "easeInOut"}}
        className="text-4xl font-bold text-bali-brown self-center text-center"
      >
        Jejak Budaya di Era Digital
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scaleY: 0, transformOrigin: "top"}}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.4, delay:1, ease: "easeInOut"}}
        className="text-lg text-bali-brown mt-4 text-center"
      >
        Menyaksikan bagaimana tradisi, seni, dan spiritualitas Bali beradaptasi, berevolusi, dan mendunia tanpa pernah meninggalkan akar filosofis leluhur.
      </motion.p>
      </div>
        <AnimatePresence>
          {doneAnim1 && ( 
            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 absolute top-60 w-full p-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
      {dataBudaya.map((item, index) => (
        <motion.div
        key={item.id}
        layoutId={`container-${item.id}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: index * 0.4, duration: 0.5, ease: "easeOut" } 
        }}
        whileInView={{
          y: [0, -7, 0],
          transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.03, y: -5, transition: {duration: 0.2} }}
        onClick={() => setKartuTerpilih(item)}
        className="overflow-hidden rounded-2xl cursor-pointer
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            />
          <div className="p-5">
            <h3 className="text-xl font-bold text-white">
              {item.title}
            </h3>
          </div>
            </motion.div>
          ))}
          </motion.div>
        )}
          </AnimatePresence>
          <AnimatePresence>
      {kartuTerpilih && (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setKartuTerpilih(null)}
        >
          <motion.div
            layoutId={`container-${kartuTerpilih.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-balinese-sand text-white border border-white/20 shadow-2xl"
            >
            <img
              src={kartuTerpilih.image}
              alt={kartuTerpilih.title}
              className="w-full h-64 object-cover"
              />

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl font-bold">
                  {kartuTerpilih.title}
                </h2>

                <button
                  onClick={() => setKartuTerpilih(null)}
                  className="text-2xl text-white/70 hover:text-white"
                  aria-label="Tutup informasi"
                  >
                  &times;
                </button>
              </div>

              <p className="mt-4 leading-7 text-white/70">
                {kartuTerpilih.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <div className="grid grid-cols-1 w-full z-2 relative flex flex-col p-10 gap-40 justify-center mt-10">
      {timeline.map((item)=>(
        <motion.div className="w-[95vw] h-[40vh] flex justify-center p-10 bg-bali-green/70 rounded rounded-2xl shadow-xl/70 shadow-bali-green"
          key={item.id}
          initial={{opacity: 0, x: -900}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{margin: "-200px"}}
          whileHover={{scale: 1.007, y: -1, transition: {duration: 0.3, ease: "easeInOut"}}}
        >
          <img src={item.image} alt={item.image} className="w-[30vw] h-70 object-cover rounded-xl" />
          <div className=" w-[70vw] mt-[-16px] ml-7 p-10">
            <h1 className="text-[42px] font-bold text-white">
              {item.title}
            </h1>
            <p className="text-[18px] mt-10 text-white">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="bg-bali-green w-full h-120 z-12 mt-80 p-30 gap-10 rounded-2xl font-bold flex justify-center flex-col">
      <p className="text-bali-gold text-[42px] mt-10">“Teknologi mengubah cara kita mengenal warisan, tetapi maknanya tetap hidup melalui orang-orang yang mempelajarinya.”</p>
      <div className="w-full flex flex-row gap-10">
        <a href="https://disbud.baliprov.go.id/antar-godrive-pengelolaan-data-lontar-berbasis-google-drive-di-perpustakaan-dinas-kebudayaan-provinsi-bali/" className="text-white font-light text-[20px]">Sumber 1</a>
        <a href="https://disbud.badungkab.go.id/lontar-digital-260716121815" className="text-white font-light text-[20px]">Sumber 2</a>
        <a href="https://ceraken.baliprov.go.id/objek/bahasa-aksara?utm_source=chatgpt.com" className="text-white font-light text-[20px]">Sumber 3</a>
      </div>
    </div>
    </div>
  );
}