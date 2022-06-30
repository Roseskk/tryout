import {AnimatePresence, motion} from "framer-motion"

import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../redux/store";

function MyApp({ Component, pageProps, router }) {
  return(
      <Provider store={store}>
              <motion.div
                  key={router.asPath}
                  initial={{ scale:1.1 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.1 }}
                  transition={{ ease: [0.1, 0.2, 0.2, 0.1] }}
              >
                  <Component {...pageProps}   />
              </motion.div>
      </Provider>
  )
}

export default MyApp
