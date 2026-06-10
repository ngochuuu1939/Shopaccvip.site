// Danh sách tài khoản Free Fire - Phiên bản Prime 4, Huyền Thoại, đồ xịn
const products = [
    { name: "👑 Prime 4 - Sát Thủ Bóng Đêm", rank: "Huyền Thoại", }
function renderProducts() {
    const container = document.getElementById('productList');
    if (!container) return;
    container.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">🎮 ${p.name.slice(0,4)}</div>
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-rank">🏆 ${p.rank} ⭐⭐⭐⭐ Prime 4</div>
                <div class="product-price">💰 ${p.price.toLocaleString('vi-VN')}đ</div>
                <div class="product-skin">🎁 Skin: ${p.skin}</div>
                <button class="buy-btn" data-name="${p.name}" data-price="${p.price}">📞 Liên hệ mua ngay</button>
            </div>
        `;
        container.appendChild(card);
    });
    // Gắn sự kiện xem liên hệ
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            alert(`✅ Acc Prime 4 xịn sò:\n${name}\n💰 Giá:350 ${Number(price).toLocaleString('vi-VN')}đ\n\n📲 Liên hệ mua ngay:\nZalo: 0397450274 \nTelegram: @ngochuuvip\nFacebook: Ngọc Hữu`);
        });
    });
}

renderProducts();
