export const AnimationBackground = () => {
  return (
    <div className="background-loading float-background" style={{
      position: 'fixed',
      top: '0',
      left: '-25vw',
      zIndex: -1,
      background: '#ffffff',
    }} >
      <div style={{
        width: '70vw',
        height: '100vh',
      }}>

        <div style={{
          background: '#a0d7f9',
          width: '100%',
          height: '90%',
          borderRadius: '0 0 50% 50%',
        }} />
      </div>
      <div style={{
        width: '70vw',
        height: '100vh',
        background: '#a0d7f9',
        display: 'flex',
        paddingTop: '2.5%',
        flexDirection: 'column',
      }}>

        <div style={{
          background: '#ffffff',
          width: '100%',
          height: '70%',
          borderRadius: '50% 50% 0 0',
        }} />
        <div style={{ flex: 1, backgroundColor: '#ffffff' }} />
      </div>
      <div style={{
        width: '70vw',
        height: '100vh',
      }}>

        <div style={{
          background: '#a0d7f9',
          width: '100%',
          height: '90%',
          borderRadius: '0 0 50% 50%',
        }} />
      </div>
    </div>
  )
}

export default AnimationBackground;