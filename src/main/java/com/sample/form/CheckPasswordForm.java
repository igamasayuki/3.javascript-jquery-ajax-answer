package com.sample.form;

public class CheckPasswordForm {
	// パスワード
	private String password;
	// 確認用パスワード
	private String confirmationPassword;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmationPassword() {
		return confirmationPassword;
	}

	public void setConfirmationPassword(String confirmationPassword) {
		this.confirmationPassword = confirmationPassword;
	}
}
