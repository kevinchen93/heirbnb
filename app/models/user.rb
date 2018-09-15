class User < ApplicationRecord
  before_validation :ensure_session_token

  validates :first_name, :last_name, :email, presence: true, uniqueness: true
  validates :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "Listing"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: "Booking"

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
