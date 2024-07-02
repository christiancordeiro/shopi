import "swiper/css/zoom"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"

const ModalSwiperZoom = ({ openModal, selectedImage, handleCloseModal }) => {
  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            boxShadow: 24,
            p: 4,
            outline: 0,
            pointerEvents: "none",
          }}
        >
          <div className="swiper-zoom-container">
            <img
              src={selectedImage}
              alt="Zoomed product"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default ModalSwiperZoom
