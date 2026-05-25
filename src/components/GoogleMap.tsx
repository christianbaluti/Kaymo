const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-card">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.8834894927277!2d26.694444!3d-27.9833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9031c0f13e1eb1%3A0x5c1c57b72c0f2f5e!2sVoorspoed%2C%20Welkom%2C%209459%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1704123456789!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kaymo Tech Location"
      />
    </div>
  );
};

export default GoogleMap;
