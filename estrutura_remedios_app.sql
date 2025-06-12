
-- Usuários (idosos ou responsáveis)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    email VARCHAR(254) UNIQUE,
    is_elderly BOOLEAN DEFAULT FALSE,
    birth_date DATE,
    phone VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Medicamentos
CREATE TABLE medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    principio_ativo VARCHAR(100),
    fabricante VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Localização de medicamentos em farmácias
CREATE TABLE localizacoes_medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medicamento_id INT,
    nome_farmacia VARCHAR(100),
    endereco VARCHAR(255),
    cidade VARCHAR(100),
    estado VARCHAR(100),
    preco DECIMAL(10,2),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id) ON DELETE CASCADE
);

-- Receitas / tratamentos do usuário
CREATE TABLE receitas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    nome_tratamento VARCHAR(100),
    observacoes TEXT,
    data_inicio DATE,
    data_fim DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Medicamentos dentro das receitas
CREATE TABLE receita_medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    receita_id INT,
    medicamento_id INT,
    dosagem VARCHAR(50),
    frequencia VARCHAR(50),
    horario_uso TIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (receita_id) REFERENCES receitas(id) ON DELETE CASCADE,
    FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id) ON DELETE CASCADE
);

-- Histórico de interações com o chatbot
CREATE TABLE chatbot_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pergunta TEXT,
    resposta TEXT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
