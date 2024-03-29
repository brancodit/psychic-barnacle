pluginManagement {
	repositories {
		mavenCentral()
		gradlePluginPortal()
		if (version.endsWith('-SNAPSHOT')) {
			maven { url "https://repo.spring.io/snapshot" }
		}
	}
	resolutionStrategy {
		eachPlugin {
			if (requested.id.id == "org.jetbrains.kotlin.jvm") {
				useVersion "${kotlinVersion}"
			}
			if (requested.id.id == "org.jetbrains.kotlin.plugin.spring") {
				useVersion "${kotlinVersion}"
			}
		}
	}
}

//plugins {
//	id "com.gradle.enterprise" version "3.15.1"
//	id "io.spring.ge.conventions" version "0.0.15"
}

//hello boss

plugins {
	id "base"
	id "org.jetbrains.kotlin.jvm" apply false // https://youtrack.jetbrains.com/issue/KT-30276
	id "io.spring.nohttp" version "0.0.11"
}



defaultTasks 'build'

nohttp {
	allowlistFile = project.file("src/nohttp/allowlist.lines")
	source.exclude "**/bin/**"
	source.exclude "**/build/**"
	source.exclude "**/out/**"
	source.exclude "**/target/**"
	source.exclude "**/.settings/**"
	source.exclude "**/.classpath"
	source.exclude "**/.project"
	source.exclude "spring-boot-project/spring-boot-tools/spring-boot-buildpack-platform/src/test/resources/org/springframework/boot/buildpack/platform/docker/export.tar"
}
