import {AnimatePresence, motion} from "framer-motion"

import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    console.log(router.asPath)
  return(
      <Provider store={store}>
          <AnimatePresence>
              {
                  <motion.div
                      key={router.asPath}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 1 }}
                      // transition={{delay: 1}}
                  >
                      <Component {...pageProps} />
                  </motion.div>
              }
          </AnimatePresence>
      </Provider>
  )
}

export default MyApp
