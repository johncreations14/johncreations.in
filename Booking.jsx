import React from 'react';

export default function Booking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const service = data.get("service");

    // WhatsApp Alert
    const whatsappURL = `https://api.whatsapp.com/send?phone=919177732291&text=New%20Booking%0AName:%20${name}%0APhone:%20${phone}%0AService:%20${service}`;
    window.open(whatsappURL, '_blank');

    // Then redirect to thank you
    form.submit();
    setTimeout(() => {
      window.location.href = '/thankyou';
    }, 500);
  };

  return (
    <div className="booking-form">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xayrjkre" method="POST">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <select name="service" required>
          <option value="">Select a service</option>
          <option value="Photography">Photography</option>
          <option value="Album Designing">Album Designing</option>
        </select>
        <textarea name="message" placeholder="Message (Optional)"></textarea>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
