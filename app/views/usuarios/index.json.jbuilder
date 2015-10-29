json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :user, :pass
  json.url usuario_url(usuario, format: :json)
end
